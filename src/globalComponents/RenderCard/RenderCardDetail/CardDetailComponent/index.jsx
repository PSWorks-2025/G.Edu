import React, { useState, useEffect, useContext } from 'react';
import CardThumbnail from './CardThumbnail.jsx';
import CardContext from '../../../../utils/context/cardContext.jsx';

const CardDetailComponent = ({ id }) => {
  const { cardLookupTable } = useContext(CardContext);
  const { title, description, deadline, areas, subAreas, detailContent } =
    cardLookupTable[id] || {};
  console.log(cardLookupTable[id], id);
  return (
    <div className="bg-[#f5f5f5] z-50 overflow-y-auto ">
      <div className="flex flex-col md:flex-row mb-6 h-57.25">
        {/* Card image and etc display part */}
        <CardThumbnail id={id} />

        <div className="md:ml-6 mt-4 md:mt-0 h-57.25 flex-1 flex flex-col">
          <div className="h-full">
            <p className=" text-xl text-gray-700 overflow-hidden max-h-18 mb-4">{title}</p>
            <p className="text-gray-700 overflow-hidden max-h-18 mb-4">{description}</p>
            {deadline && (
              <p className="mb-4">
                Review again on:{' '}
                {new Date(deadline).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
              </p>
            )}

            <p className="mb-4">{areas}</p>
            <p className="mb-4">{Object.entries(subAreas)}</p>
          </div>

          <button
            className="bg-black text-white px-6 py-3 w-fit rounded hover:bg-gray-800"
            onClick={() => console.log(detailContent)}
          >
            Learn Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailComponent;
