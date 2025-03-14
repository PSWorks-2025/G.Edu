import React from 'react';

const AreaRadioButtonGroup = ({ areas, itemId }) => {
  return (
    <div className="flex space-x-6 text-black">
      <p className="text-gray-500">Area:</p>
      <label className="flex items-center">
        <input
          type="radio"
          name={`area-${itemId}-verbal`}
          checked={areas.includes('Verbal')}
          readOnly
          className="mr-1 w-4 h-4 appearance-none rounded-full border border-slate-400 checked:border-[#4880ff] checked:bg-[#4880ff]"
        />
        <span className="text-sm">Verbal</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name={`area-${itemId}-math`}
          checked={areas.includes('Math')}
          readOnly
          className="mr-1 w-4 h-4 appearance-none rounded-full border border-slate-400 checked:border-[#4880ff] checked:bg-[#4880ff]"
        />
        <span className="text-sm">Math</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name={`area-${itemId}-vocab`}
          checked={areas.includes('Vocab')}
          readOnly
          className="mr-1 w-4 h-4 appearance-none rounded-full border border-slate-400 checked:border-[#4880ff] checked:bg-[#4880ff]"
        />
        <span className="text-sm">Vocab</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name={`area-${itemId}-tip`}
          checked={areas.includes('Tip/Other')}
          readOnly
          className="mr-1 w-4 h-4 appearance-none rounded-full border border-slate-400 checked:border-[#4880ff] checked:bg-[#4880ff]"
        />
        <span className="text-sm">Tip/Order</span>
      </label>
    </div>
  );
};

export default AreaRadioButtonGroup;
