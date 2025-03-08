import React from 'react';

const SearchTopBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-bar" />
      <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchTopBar;
