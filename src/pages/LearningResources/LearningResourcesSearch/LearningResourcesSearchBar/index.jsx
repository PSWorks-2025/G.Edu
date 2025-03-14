import React from 'react';
import { IoSearch } from 'react-icons/io5';

const LearningResourcesSearchBar = ({ searchText, setSearchText }) => {
  return (
    <>
      <label
        htmlFor="search"
        className="
        ROBOTO_FONTS
        w-172 h-full
        flex items-center gap-2
        px-3
        rounded-full border-1 transition-colors
        text-sm
        border-gray-300 focus-within:border-black
        [&>#search-icon]:text-gray-300 focus-within:[&>#search-icon]:text-black
        "
      >
        <IoSearch id="search-icon" className="text-lg min-w-5" />
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="outline-0 w-full bg-transparent"
          value={searchText}
          onChange={(inputText) => setSearchText(inputText.target.value)}
        />
      </label>
    </>
  );
};

export default LearningResourcesSearchBar;
