import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="TopBar">
      <div className="logo-container">
        {/* TODO: Add logo */}
        <h1>SAT Classroom</h1>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="settings-container">
        <div
          className="settings-button"
          onMouseEnter={() => setShowSettings(true)}
          onMouseLeave={() => setShowSettings(false)}
        >
          <span>John Doe</span>
          {/* TODO: Add profile picture */}
          <i className="fa fa-caret-down"></i>

          {showSettings && (
            <div className="settings-dropdown">
              <ul>
                <li>
                  <Link to="/profile" className="dropdown-item">
                    <div className="dropdown-link">Profile</div>
                  </Link>
                </li>
                <li>
                  <Link to="/account-settings" className="dropdown-item">
                    <div className="dropdown-link">Account Settings</div>
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="dropdown-item">
                    <div className="dropdown-link">Help</div>
                  </Link>
                </li>
                <li>
                  <div className="dropdown-link">Logout</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
