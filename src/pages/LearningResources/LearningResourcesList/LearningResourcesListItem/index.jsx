import React from 'react';

const LearningResourcesListItem = ({ title, description, deadline, imageSrc, href }) => {
  return (
    <a href={href} className="mt-6 bg-[#f5f5f5] w-full px-4 py-2 h-24 rounded-lg flex items-center">
      <div className="mt-2 w-7 h-full">
        <img
          src={imageSrc}
          alt="icon"
          className="bg-[#fbfbfb] w-full h-7 rounded-full"
        />
      </div>
      <div className="ROBOTO_FONTS w-full h-full ml-3 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold" dangerouslySetInnerHTML={{__html: title}}></h3>
          <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
        <p className="text-sm text-gray-500">Deadline: {deadline}</p>
      </div>
    </a>
  );
};

export default LearningResourcesListItem;
