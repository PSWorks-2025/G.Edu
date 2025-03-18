import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExamDay = ({ value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-2">Exam day *</label>
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        className="border border-gray-300 rounded-lg px-4 py-2 w-72"
      />
    </div>
  );
};

export default ExamDay;
