import React from "react";
import { Button } from "../../../../@/ui/button";

export default function PaginationControlled({
  page,
  handlePageChange,
  totalPages = 10,
}) {
  const getButtonClasses = (isActive) =>
    isActive
      ? "bg-blue-600 text-white shadow-lg"
      : "bg-black text-white hover:bg-gray-700";

  return (
    <div className="flex items-center justify-center my-12 gap-3">
      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => handlePageChange(null, page - 1)}
        aria-label="Previous Page"
        className={`px-4 py-2 rounded-lg ${
          page === 1
            ? "bg-transparent text-gray-500 cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
      >
        Previous
      </Button>

      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isActive = page === pageNumber;

          return (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(null, pageNumber)}
              aria-current={isActive ? "page" : undefined}
              aria-label={`Go to page ${pageNumber}`}
              className={`px-4 py-2 rounded-lg transition duration-200 ease-in-out ${getButtonClasses(
                isActive
              )}`}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        disabled={page === totalPages}
        onClick={() => handlePageChange(null, page + 1)}
        aria-label="Next Page"
        className={`px-4 py-2 rounded-lg ${
          page === totalPages
            ? "bg-transparent text-white cursor-not-allowed"
            : "hover:bg-gray-700"
        }`}
      >
        Next
      </Button>
    </div>
  );
}
