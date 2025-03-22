import React, { useState, useEffect } from 'react';
import FilterGroup from '../../../globalComponents/FilterGroup';
import SearchBar from '../../../globalComponents/SearchBar';

const NotebookSearchBar = ({ searchText, setSearchText, setDefaultOrder }) => {
  const [dimensions, setDimensions] = useState({
    searchWidth: '100%',
    searchHeight: '40px',
    optionWidth: '120px', // Default width for options
  });

  const updateDimensions = () => {
    if (window.innerWidth < 768) {
      setDimensions({ searchWidth: '100%', searchHeight: '30px', optionWidth: '80px' }); 
    } else if (window.innerWidth < 1024) {
      setDimensions({ searchWidth: '50%', searchHeight: '30px', optionWidth: '100px' }); 
    } else {
      setDimensions({ searchWidth: '50%', searchHeight: '40px', optionWidth: '120px' }); 
    }
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const OptionGroups = [
    {
      label: 'Order By',
      options: [
        { value: 'topic', label: 'Topic' },
        { value: 'date_created', label: 'Date Created' },
      ],
      set: setDefaultOrder,
    },
  ];

  return (
    <div className="flex flex-row items-center">
      {/* Filter Group */}
      <FilterGroup
        height={dimensions.searchHeight}
        widthOfEachFilter={dimensions.optionWidth} 
        OptionGroups={OptionGroups}
      />
      <div className="mx-1"></div>
      {/* Search Bar */}
      <SearchBar
        width={dimensions.searchWidth}
        height={dimensions.searchHeight}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    </div>
  );
};

export default NotebookSearchBar;