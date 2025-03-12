import React from 'react';

const Tabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            selectedTab === tab.id ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
