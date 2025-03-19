import React from 'react';

const PreferredStudyTime = ({ value, onChange }) => {
  return (
    <div className="flex flex-col grow">
      <label className="text-gray-700 font-medium mb-2">Preferred Study Time *</label>
      <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full max-w-72">
        <input
          type="time"
          value={value.start}
          onChange={(e) => onChange({ ...value, start: e.target.value })}
          className="flex grow text-center"
        />
        <span className="mx-2">-</span>
        <input
          type="time"
          value={value.end}
          onChange={(e) => onChange({ ...value, end: e.target.value })}
          className="flex grow text-center"
        />
      </div>
    </div>
  );
};

export default PreferredStudyTime;
