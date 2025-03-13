import React from 'react';
import Select from 'react-select';

const LearningResourcesFilter = ({ setFilteredExerciseType, setFilteredLevel }) => {
  const selectStyles1 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#fbfbfb',
      border: 'none',
      borderRight: '1px solid #d1d5dc',
      borderRadius: '0.75rem 0rem 0rem 0.75rem',
      height: '100%',
      paddingLeft: '0.5rem',
    }),
  };

  const selectStyles2 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#fbfbfb',
      border: 'none',
      borderLeft: '1px solid #d1d5dc',
      borderRadius: '0rem 0.75rem 0.75rem 0rem',
      height: '100%',
      paddingLeft: '0.5rem',
    }),
  };

  const exerciseTypes = [
    { value: 'All types', label: 'All types' },
    { value: 'Document', label: 'Document' },
    { value: 'Exercise', label: 'Exercise' },
    { value: 'Flashcard', label: 'Flashcard' },
    { value: 'Flashcard', label: 'Flashcard' },
  ];

  const levels = [
    { value: 'All levels', label: 'All levels' },
    { value: 'Foundation', label: 'Foundation' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Advanced', label: 'Advanced' },
  ];

  return (
    <div className="ROBOTO_FONTS flex items-center h-full">
      <Select
        placeholder="Exercise type"
        styles={selectStyles1}
        options={exerciseTypes}
        className="w-40 h-full text-sm"
        components={{
          IndicatorSeparator: () => null,
        }}
        defaultValue={exerciseTypes[0]}
        onChange={(selectedOption) => setFilteredExerciseType(selectedOption.value)}
      />
      <Select
        placeholder="Level"
        styles={selectStyles2}
        options={levels}
        className="w-40 h-full text-sm"
        components={{
          IndicatorSeparator: () => null,
        }}
        defaultValue={levels[0]}
        onChange={(selectedOption) => setFilteredLevel(selectedOption.value)}
      />
    </div>
  );
};

export default LearningResourcesFilter;
