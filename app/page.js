"use client";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import PageTitle from "@/components/PageTitle";
import { FiPlus } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import productService from "@/services/productService";
import ProductCard from "@/components/cards/ProductCard";
import Spinner from "@/components/Spinner";

export default function Home() {
  // Fetch product list
  const {
    isLoading,
    data: allProduct,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => productService.getProducts().then((data) => data.data),
  });

  return (
    <div className="space-y-4">
      {/* page title */}
      <section className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
        <PageTitle>All Products</PageTitle>
        <Link className="font-bold text-base" href={`#`}>
          <Button className="justify-center gap-2">
            <FiPlus className="w-5" />
            <p className="font-bold text-base">Create Product</p>
          </Button>
        </Link>
      </section>

      {/* page filters */}

      {/* product list */}
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {allProduct.products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </section>
      )}
    </div>
  );
}
