import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ search, handleChange }) {
  return (
    <div className="flex items-center gap-4 bg-gray-700 px-6 py-3 rounded-full w-4/5 mx-auto mb-6">
      <SearchIcon style={{ color: "#9CA3AF", fontSize: "1.2rem" }} />
      <input
        className="bg-gray-700 text-gray-300 w-full text-base font-sans border-none focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default SearchBar;
