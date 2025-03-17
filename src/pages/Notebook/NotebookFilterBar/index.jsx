import React from 'react';

const NotebookFilterBar = ({filters, activeFilter, setActiveFilter}) => {
  return (
    <div className="flex flex-row mt-4">
      {filters.map((filter, index) => {
          const active = activeFilter === filter;
          return (
              <div 
                  key={index} 
                  className="px-4 py-2 mr-2 rounded-xl cursor-pointer"
                  onClick={() => setActiveFilter(filter)} 
                  style={{ backgroundColor: active ? "#202020" : "#D9D9D9" }}
              >
                  <p className="text-sm" style={{ color: active ? "#fff" : "#202020" }}>{filter}</p>
              </div>
          );
      })}
    </div>
  )
};

export default NotebookFilterBar;
