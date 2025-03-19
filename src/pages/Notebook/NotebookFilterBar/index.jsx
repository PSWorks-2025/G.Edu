import React from 'react';
import Tabs from '../../../globalComponents/Tabs';

const NotebookFilterBar = ({ filters, selectedTab, setSelectedTab }) => {
  return (
    <div>
      <Tabs tabs={filters} selectedTab={selectedTab} onTabChange={setSelectedTab} />
    </div>
  );
};

export default NotebookFilterBar;
