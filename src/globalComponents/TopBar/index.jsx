import React, { useState } from 'react';
import { primaryColors } from '../../utils/primaryColor/Colors';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

function TopBar({ toggleNotebook, navItems, activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div
      style={{ backgroundColor: primaryColors.white }}
      className="h-[70px] absolute w-full flex flex-row items-center md:justify-center"
    >
      {/* Mobile toggle */}
      <div className='md:hidden flex flex-row items-center text-gray-700 gap-3 ml-5' onClick={toggleMenu}>
        <Menu />
        <p className='ROBOTO_FONTS text-lg'>G.Edu</p>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 shadow-lg z-10 transition-transform transform translate-x-0">
          <div className="absolute top-0 left-0 w-3/4 h-full bg-white shadow-lg p-5 overflow-y-auto">
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              <p className='text-[28px]'>&times;</p> 
            </button>
            <ul className="flex flex-col">
              {navItems.map(item => (
                <li key={item.id} className={`p-4 hover:bg-gray-200 ${activeTab === item.id ? 'bg-black text-white' : ''}`}>
                  <Link to={item.path} className="flex items-center" onClick={() => { setActiveTab(item.id); toggleMenu(); }}>
                    <ion-icon name={item.icon} style={{ marginRight: 10 }}></ion-icon>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className={`p-4 hover:bg-gray-200 ${activeTab === 'logout' ? 'bg-black text-white' : ''}`}>
                <Link to="/logout" className="flex items-center" onClick={toggleMenu}>
                  <ion-icon name="log-out-outline" style={{ marginRight: 10 }}></ion-icon>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="w-1/2 flex flex-row translate-x-[10%] md:translate-x-[-23%] lg:translate-x-[-10%] items-center justify-center relative">
        <ion-icon
          style={{
            fontSize: 15,
            position: 'absolute',
            left: 10,
            color: primaryColors.gray,
          }}
          name="search-outline"
        ></ion-icon>
        <input
          style={{
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 35,
            fontSize: 14,
            backgroundColor: '#F9F9F9',
          }}
          placeholder="Search"
          type="text"
          className="w-full border-1 rounded-2xl border-gray-400 placeholder:NUNITO_SANS"
        />
      </div>

      {/* User info (Desktop) */}
      <div className="hidden flex-row items-center absolute right-5 md:flex md:right-20 w-50 justify-between">
        {/* Note? */}
        <div
          style={{
            marginTop: 3,
            backgroundColor: primaryColors.black,
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 3,
            paddingLeft: 8,
            paddingRight: 8,
            borderRadius: 10,
          }}
          onClick={() => toggleNotebook()}
        >
          <ion-icon
            style={{ fontSize: 20, color: primaryColors.white }}
            name="reader-outline"
          ></ion-icon>
        </div>

        {/* Data */}
        <div className="flex flex-row items-center justify-center">
          <img
            style={{
              backgroundColor: primaryColors.lightGray,
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />

          <div className="ml-2">
            {/* Name */}
            <p style={{ fontSize: 14, fontWeight: 700 }} className="ROBOTO_FONTS">
              Name
            </p>
            {/* Role */}
            <p style={{ fontSize: 12, fontWeight: 400 }} className="ROBOTO_FONTS">
              Student
            </p>
          </div>
        </div>

        {/* Popup Trigger (Desktop) */}
        <div className="relative cursor-pointer" >
          <div onClick={togglePopup}>˅</div>
          {/* Popup Menu */}
          {isPopupOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-20 rounded-lg">
              <ul className="flex flex-col">
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="/settings" className="flex items-center">
                    <ion-icon name="settings-outline" style={{ marginRight: 10 }}></ion-icon>
                    Settings
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">
                  <Link to="/logout" className="flex items-center">
                    <ion-icon name="log-out-outline" style={{ marginRight: 10 }}></ion-icon>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* User info (Mobile) */}
      <div className='md:hidden flex items-center absolute right-5'>
        <img
          onClick={togglePopup}
          style={{
            backgroundColor: primaryColors.lightGray,
            width: 40,
            height: 40,
            borderRadius: 100,
            cursor: 'pointer'
          }}
        />
        
        {/* User Popup for Mobile */}
        {isPopupOpen && (
          <div className="absolute right-0 mt-2 w-48 top-10 bg-white shadow-lg z-20 rounded-lg">
            <ul className="flex flex-col">
              {/* User data too */}
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center ml-2 mt-2">
                  {/* Name */}
                  <p style={{ fontSize: 14, fontWeight: 700 }} className="ROBOTO_FONTS">
                    Name
                  </p>
                  {/* Role */}
                  <p style={{ fontSize: 12, fontWeight: 400 }} className="ROBOTO_FONTS ml-2 mt-0.5">
                    Student
                  </p>
                </div>
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center">
                  <ion-icon name="reader-outline" style={{ marginRight: 10 }}></ion-icon>
                  Notebook
                </div>
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center">
                  <ion-icon name="settings-outline" style={{ marginRight: 10 }}></ion-icon>
                  Settings
                </div>
              </li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center">
                  <ion-icon name="log-out-outline" style={{ marginRight: 10 }}></ion-icon>
                  Logout
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;