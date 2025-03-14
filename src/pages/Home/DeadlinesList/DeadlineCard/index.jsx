import React from 'react';

const DeadlineCard = (id) => {
  return (
    <div key={id}>
      <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between mb-2">
        <div className="flex items-center">
          {/* <i className="fas fa-file-alt text-gray-500 text-2xl mr-4"></i> */}
          <ion-icon
            style={{ color: 'gray', fontSize: 20, marginRight: 10 }}
            name="document-outline"
          ></ion-icon>
          <div>
            <h2 className="text-lg font-semibold">Name</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit.</p>
            <p className="text-gray-400 text-sm">Deadline: 12/2/2012</p>
          </div>
        </div>
        <div className="h-4 w-4 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default DeadlineCard;
