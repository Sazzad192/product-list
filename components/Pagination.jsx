import { useEffect, useState } from "react";
import Button from "./buttons/Button";
import { cn } from "@/lib/utils";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function Pagination({
  dataLength = 0,
  itemsPerPage,
  setParams,
}) {
  const itemsCount = itemsPerPage || 0;
  const totalPages = Math.ceil(dataLength / itemsCount);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const siblingCount = isMobile ? 0 : 1;

  useEffect(() => {
    setParams(currentPage);
  }, [currentPage]);

  if (currentPage === 0) {
    return null;
  }

  const generatePageNumbers = (currentPage, totalPages) => {
    const pageNumbers = [];
    const maxVisiblePages = siblingCount;

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    if (totalPages <= maxVisiblePages) {
      return pageNumbers;
    }

    const visiblePages = [];

    if (currentPage < 3) {
      visiblePages.push(...pageNumbers.slice(0, 3));
      visiblePages.push("...");
      visiblePages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      visiblePages.push(1);
      visiblePages.push("...");
      visiblePages.push(...pageNumbers.slice(totalPages - 4));
    } else {
      visiblePages.push(1);
      visiblePages.push("...");
      visiblePages.push(currentPage - 1);
      visiblePages.push(currentPage);
      visiblePages.push(currentPage + 1);
      visiblePages.push("...");
      visiblePages.push(totalPages);
    }

    return visiblePages;
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div
      className={cn(
        "flex justify-center items-center mt-5 gap-1",
        totalPages < 2 && "hidden"
      )}
    >
      <Button
        variant="outline"
        className="rounded-full p-2 border-neutral-600"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdOutlineArrowBackIosNew className="w-4 h-4 text-neutral-600" />
      </Button>
      {pageNumbers.map((page, index) => (
        <div key={index}>
          {page === "..." ? (
            <span className="px-1 text-gray-500">...</span>
          ) : (
            <button
              onClick={() => handlePageChange(page)}
              className={`p-2 flex-col justify-center items-center w-8 h-8 md:w-9 md:h-9 rounded-full  ${
                page === currentPage
                  ? "bg-white rounded-full text-sm font-semibold shadow-sm text-neutral-600 border border-neutral-600"
                  : "text-sm font-medium shadow-sm hover:text-neutral-600 hover:border hover:border-neutral-600 hover:bg-white rounded-full"
              }`}
            >
              {page}
            </button>
          )}
        </div>
      ))}
      <Button
        variant="outline"
        className="rounded-full p-2 border-neutral-600"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdOutlineArrowForwardIos className="w-4 h-4 text-neutral-600" />
      </Button>
    </div>
  );
}
