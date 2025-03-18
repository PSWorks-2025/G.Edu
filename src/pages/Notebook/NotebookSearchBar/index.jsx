import React from 'react';
import FilterGroup from '../../../globalComponents/FilterGroup';
import SearchBar from '../../../globalComponents/SearchBar';
const NotebookSearchBar = ({
  searchText,
  setSearchText,
  setDefaultOrder
}) => {
  
  const OptionGroups = [
    {
      label: 'Order By',
      options: [
        { value: 'topic', label: 'Topic' },
        { value: 'date_created', label: 'Date Created' },
      ],
      set: setDefaultOrder,
    }
  ];

  return (
    <>
      <div className="flex flex-row items-center">
        {/* Filter Group */}
        <FilterGroup height={40} widthOfEachFilter={120} OptionGroups={OptionGroups} />
        <div className='mx-1'></div>
        {/* Search */}
        <SearchBar width="50%" height="40px" searchText={searchText} setSearchText={setSearchText}/>
      </div>
    </>
  );
};

export default NotebookSearchBar;
