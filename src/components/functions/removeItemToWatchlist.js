import { toast } from "react-toastify";
import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton:
      "bg-green-500 text-white font-medium py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 mr-2",
    cancelButton:
      "bg-red-500 text-white font-medium py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2",
  },
  buttonsStyling: false,
});

export const removeItemToWatchlist = (e, id, setIsCoinAdded) => {
  e.preventDefault();

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You want to remove this coin from your watchlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        const newList = watchlist.filter((coin) => coin !== id);

        setIsCoinAdded(false);
        localStorage.setItem("watchlist", JSON.stringify(newList));

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "The coin has been removed from your watchlist.",
          icon: "success",
        });

        toast.success(
          `${
            id.substring(0, 1).toUpperCase() + id.substring(1)
          } - has been removed!`
        );

        window.location.reload(); // Optionally reload the page if necessary
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "The coin is still in your watchlist.",
          icon: "error",
        });

        toast.error(
          `${
            id.substring(0, 1).toUpperCase() + id.substring(1)
          } - could not be removed!`
        );

        setIsCoinAdded(true);
      }
    });
};
