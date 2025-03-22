import React from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ searchText, setSearchText, width, height }) => {
  return (
    <label
      htmlFor="search"
      className="
        ROBOTO_FONTS
        flex items-center gap-2
        px-3
        rounded-full border border-gray-300 transition-colors
        text-sm focus-within:border-black
        [&>#search-icon]:text-gray-300 focus-within:[&>#search-icon]:text-black
      "
      style={{ width, height }}
    >
      <IoSearch id="search-icon" className="text-[14px] md:text-lg min-w-5" />
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="outline-0 w-full bg-transparent md:text-base text-sm"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </label>
  );
};

export default SearchBar;
