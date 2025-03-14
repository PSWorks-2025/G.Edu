import React from 'react';
import { primaryColors } from '../../utils/primaryColor/Colors';

function TopBar() {
  return (
    <div
      style={{ backgroundColor: primaryColors.white }}
      className="h-[70px] absolute w-full flex flex-row items-center justify-center "
    >
      {/* Search Bar */}
      <div className="w-1/2 flex flex-row translate-x-[-10%] items-center justify-center relative">
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

      {/* User info */}
      <div className="flex flex-row items-center absolute right-20 w-50 justify-between">
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

        <div className="">˅</div>
        {/* Pop up features? ?? */}
      </div>
    </div>
  );
}

export default TopBar;
