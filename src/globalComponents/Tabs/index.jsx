import React from 'react';

const Tabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div className="no-scroll-bar overflow-x-auto max-w-full">
      <div className="flex space-x-2 mb-4 min-w-max ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`lg:px-4 lg:py-2 md:px-2 md:py-1 p-1 rounded-lg font-semibold transition ${
              selectedTab === tab.id ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <p className='lg:text-base md:text-sm text-[12px]'>{tab.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;