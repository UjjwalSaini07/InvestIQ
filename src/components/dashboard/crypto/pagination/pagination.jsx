import React from "react";
import { Pagination } from "../../../../@/ui/pagination";

export default function PaginationControlled({ page, handlePageChange, totalPages = 10 }) {
  return (
    <div className="flex justify-center my-12">
      <Pagination
        total={totalPages}
        currentPage={page}
        onPageChange={(newPage) => handlePageChange(null, newPage)}
      />
    </div>
  );
}


// import React from "react";
// import { Button } from "../../../../@/ui/button";

// export default function PaginationControlled({ page, handlePageChange, totalPages = 10 }) {
//   return (
//     <div className="flex items-center justify-center my-12 gap-2">
//       {/* Previous Page Button */}
//       <Button
//         variant="outline"
//         disabled={page === 1}
//         onClick={() => handlePageChange(null, page - 1)}
//       >
//         Previous
//       </Button>

//       {/* Pagination Numbers */}
//       {[...Array(totalPages)].map((_, index) => {
//         const pageNumber = index + 1;
//         return (
//           <Button
//             key={pageNumber}
//             variant={page === pageNumber ? "default" : "outline"}
//             onClick={() => handlePageChange(null, pageNumber)}
//             className={`${page === pageNumber ? "bg-blue-600 text-white" : ""}`}
//           >
//             {pageNumber}
//           </Button>
//         );
//       })}

//       {/* Next Page Button */}
//       <Button
//         variant="outline"
//         disabled={page === totalPages}
//         onClick={() => handlePageChange(null, page + 1)}
//       >
//         Next
//       </Button>
//     </div>
//   );
// }
