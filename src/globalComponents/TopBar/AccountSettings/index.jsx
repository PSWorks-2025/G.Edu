import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountSettings = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
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
  );
};

export default AccountSettings;
