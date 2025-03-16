import React from 'react';

const Tabs = ({ tabs, selectedTab, onTabChange, styles = {} }) => {
  const defaultStyles = {
    container: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '16px',
    },
    tab: {
      padding: '8px 16px',
      borderRadius: '6px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '400',
      border: '1px solid #ddd',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, font-size 0.2s ease',
    },
    activeTab: {
      backgroundColor: '#202020',
      color: '#FCFCFC',
      fontSize: '18px',
    },
    inactiveTab: {
      backgroundColor: '#E8E8E8',
      color: '#646464',
      fontSize: '16px',
    },
  };

  return (
    <div style={{ ...defaultStyles.container, ...styles.container }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          style={{
            ...defaultStyles.tab,
            ...(selectedTab === tab.id ? defaultStyles.activeTab : defaultStyles.inactiveTab),
            ...(selectedTab === tab.id ? styles.activeTab : styles.inactiveTab),
          }}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
