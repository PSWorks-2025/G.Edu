import React from 'react';

const NotebookSearchBar = ({setSearchDescription,setSearchTitle,togglePopup,toggleSearchContent,showSearchContent,showPopup,filters,popupRef,defaultOrder,setDefaultOrder,activeFilter,setActiveFilter}) => {
  return (
    <>
      <div className="flex flex-row items-center">
          {/* Order */}
          <div 
              style={{ backgroundColor: "#FCFCFC", padding: 4, alignItems: "center", paddingLeft: 8, paddingRight: 8, borderRadius: 999 }}
              onClick={togglePopup}
          >
              <ion-icon style={{ fontSize: 15, color:"#202020" }} name="options-outline"></ion-icon>
          </div>
          {/* Search */}
          <div 
            onClick={toggleSearchContent}
            className='w-1/2 flex flex-row items-center justify-center relative ml-3 cursor-pointer'>
              <ion-icon style={{ fontSize: 15, position: 'absolute', left: 10, color: "#646464" }} name="search-outline"></ion-icon>
              <p style={{ paddingTop: 6, paddingBottom: 6, paddingLeft: 35, fontSize: 14, backgroundColor: "#F9F9F9", color: "#646464" }} className='w-full border-1 rounded-2xl border-gray-400 NUNITO_SANS'>Search</p>
          </div>
      </div>

      {/* Show search content */}
      {showSearchContent && (
          <div ref={popupRef} className="w-[840px] h-[311px] rounded-[14px] mt-2 absolute translate-x-[8%] translate-y-[-30%] p-4" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="flex flex-row">
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

              <input onChange={(e)=>setSearchTitle(e.target.value)} placeholder="Title..." style={{ marginTop: 15, fontWeight: 700, fontSize: 16 }} className="ROBOTO_FONTS w-full focus:border-0 focus:outline-0 placeholder:text-gray-300" />
              <textarea onChange={(e)=>setSearchDescription(e.target.value)} placeholder="Description" style={{ fontSize: 14, fontWeight: 400 }} contentEditable={"false"} className="ROBOTO_FONTS w-full h-[73%] focus:border-0 focus:outline-0 overflow-hidden resize-none placeholder:text-gray-300" />
          </div>
      )}

      {/* Show pop up order */}
      {showPopup && (
          <div ref={popupRef} className="w-[205px] h-[88px] rounded-[14px] mt-2 absolute p-1" style={{ backgroundColor: "#fff" }}>
              <div className="flex flex-col items-baseline">
                  <div onClick={() => setDefaultOrder("topic")} className="w-full p-2 flex flex-row justify-between cursor-pointer hover:bg-gray-50">
                      <p className="ROBOTO_FONTS" style={{ fontWeight: 400, fontSize: 14 }}>Topic</p>
                      {defaultOrder === "topic" && <ion-icon name="checkmark-outline"></ion-icon>}
                  </div>

                  <div onClick={() => setDefaultOrder("date_created")} className="mt-1 mb-1 w-full p-2 flex flex-row cursor-pointer justify-between hover:bg-gray-50">
                      <p className="ROBOTO_FONTS" style={{ fontWeight: 400, fontSize: 14 }}>Date Created</p>
                      {defaultOrder === "date_created" && <ion-icon name="checkmark-outline"></ion-icon>}
                  </div>
              </div>
          </div>
      )}
    </>
  )
};

export default NotebookSearchBar;
