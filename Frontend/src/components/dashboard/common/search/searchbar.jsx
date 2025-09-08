import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <div className="flex items-center gap-3 bg-black px-5 py-3 rounded-full w-4/5 mx-auto mb-6 border-2 border-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>

      <input
        type="text"
        className="bg-transparent text-gray-300 w-full text-sm md:text-base border-none focus:outline-none placeholder-gray-500 focus:placeholder-gray-400"
        placeholder="Search for any Cryptocurrency or Stocks..."
        value={search}
        onChange={handleChange}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
