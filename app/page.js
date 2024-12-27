"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import PageTitle from "@/components/PageTitle";
import { FiPlus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import productService from "@/services/productService";
import ProductCard from "@/components/cards/ProductCard";
import Spinner from "@/components/Spinner";
import SearchInput from "@/components/forms/SearchInput";
import { sanitizeParams } from "@/lib/utils";
import { useDebouncedCallback } from "use-debounce";
import ReactCustomSelect from "@/components/forms/ReactCustomSelect";
import { MdOutlineCancel } from "react-icons/md";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({
    q: "",
    limit: 10,
    category: "",
  });

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      skip: (page - 1) * 10,
    }));
  }, [page]);

  // Fetch product list
  const {
    isLoading,
    data: allProduct,
    refetch,
  } = useQuery({
    queryKey: ["products", params],
    queryFn: () =>
      productService
        .getProducts(sanitizeParams(params))
        .then((data) => data.data),
  });

  // Fetch all  Category
  const {
    isLoading: categoryLoading,
    data: categoryOptions,
    refetch: categoryRefetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      productService.getCategories().then(({ data }) =>
        data.map((cat) => ({
          value: cat,
          label: cat,
        }))
      ),
  });

  const selectOptions = categoryLoading
    ? [{ value: "", label: "Select Category" }]
    : categoryOptions;

  const debounced = useDebouncedCallback((value) => {
    setParams((prevParams) => ({
      ...prevParams,
      q: value,
    }));
  }, 400);

  return (
    <div className="space-y-4">
      {/* page title */}
      <section className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
        <PageTitle>All Products</PageTitle>
        <Link className="font-bold text-base" href={`#`}>
          <Button disabled className="justify-center gap-2">
            <FiPlus className="w-5" />
            <p className="font-bold text-base">Create Product</p>
          </Button>
        </Link>
      </section>

      {/* page filters */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-3/4">
          <SearchInput
            onChange={(e) => {
              debounced(e.target.value);
              setSearchKey(e.target.value);
            }}
            onReset={() => {
              setParams((prevParams) => ({
                ...prevParams,
                place_from: "",
              }));
              setSearchKey("");
            }}
            value={searchKey}
            label="Search Product"
            placeholder="Input here what you need !"
          />
        </div>

        <div className="w-full md:w-1/4">
          <ReactCustomSelect
            label="Filter By Category"
            placeholder="Select Category"
            name="property_type"
            options={selectOptions}
            value={selectOptions.find(
              (option) => option.value === params.category
            )}
            onChange={(selectedOption) => {
              setParams((prevParams) => ({
                ...prevParams,
                skip: 0,
                category: selectedOption.value,
              }));
            }}
            extraClassName="w-full"
          />
        </div>
      </section>

      {/* filter By Badges */}
      {(params.q || params.category) && (
        <section className="mt-1 text-grey-600 flex items-center gap-x-2">
          Showing results for{" "}
          {params.q ? (
            <div className="flex items-center gap-1 border rounded-full px-2 py-1 text-xs bg-primary-100 text-white dark:text-black">
              <p>{params.q}</p>
              <MdOutlineCancel
                onClick={() => {
                  setParams((prevParams) => ({
                    ...prevParams,
                    q: "",
                  })),
                    setSearchKey("");
                }}
                className="h-3 cursor-pointer"
              />
            </div>
          ) : null}
          {params.category ? (
            <div className="flex items-center gap-1 border rounded-full px-2 py-1 text-xs bg-primary-100 text-white dark:text-black">
              <p>{params.category}</p>
              <MdOutlineCancel
                onClick={() =>
                  setParams((prevParams) => ({
                    ...prevParams,
                    category: "",
                  }))
                }
                className="h-3 cursor-pointer"
              />
            </div>
          ) : null}
        </section>
      )}

      {/* product list */}
      {isLoading ? (
        <section className="flex justify-center items-center">
          <Spinner />
        </section>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {allProduct.products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </section>
      )}

      <section>
        <Pagination
          dataLength={allProduct?.total}
          itemsPerPage="10"
          setParams={setPage}
        />
      </section>
    </div>
  );
}
