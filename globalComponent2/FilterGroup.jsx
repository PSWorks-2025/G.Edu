import React from 'react';
import Select from 'react-select';

import LearningResourcesFilterOption from './LearningResourcesFilterOption';

const FilterGroup = ({ height, widthOfEachFilter, OptionGroups }) => {
  const generalStyle = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: '#fbfbfb',
      border: 'none',
      height: '100%',
      paddingLeft: '0.5rem',
      boxShadow: state.isFocused ? '0 0 0 1px #000000' : 'none',
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isDisabled ? '#f5f5f5' : state.isFocused ? '#202020' : '#fbfbfb',
      color: state.isDisabled ? '#f5f5f5' : state.isFocused ? '#fbfbfb' : '#202020',
      cursor: state.isDisabled ? 'not-allowed' : 'default',
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#fbfbfb',
      borderRadius: '1rem',
      boxShadow: '0 0 2rem 0 #d0d0d0',
      width: '14rem',
      overflow: 'hidden',
    }),
    menuList: (styles) => ({
      ...styles,
      padding: '0',
    }),
  };

  const leftStyle = {
    ...generalStyle,
    control: (styles, state) => ({
      ...generalStyle.control(styles, state),
      borderRadius: '0.5rem 0rem 0rem 0.5rem',
    }),
    menu: (styles) => ({
      ...generalStyle.menu(styles),
      left: '0',
    }),
  };

  const rightStyle = {
    ...generalStyle,
    control: (styles, state) => ({
      ...generalStyle.control(styles, state),
      borderRadius: '0rem 0.5rem 0.5rem 0rem',
    }),
    menu: (styles) => ({
      ...generalStyle.menu(styles),
      right: '0',
    }),
  };

  const middleStyle = {
    ...generalStyle,
    control: (styles, state) => ({
      ...generalStyle.control(styles, state),
      borderRadius: '0',
    }),
    menu: (styles) => ({
      ...generalStyle.menu(styles),
      left: '-50%',
    }),
  };

  return (
    <div className="ROBOTO_FONTS flex items-center h-full">
      {OptionGroups.map((OptionGroup, index) => (
        <>
          <Select
            placeholder="Exercise type"
            styles={
              index === 0 ? leftStyle : index === OptionGroups.length - 1 ? rightStyle : middleStyle
            }
            options={OptionGroup.options}
            className="w-40 h-full text-sm"
            components={{
              IndicatorSeparator: () => null,
              Option: LearningResourcesFilterOption,
            }}
            defaultValue={OptionGroup.options[0]}
            onChange={(selectedOption) => OptionGroup.set(selectedOption.value)}
          />
          <div className={`w-[${widthOfEachFilter}] h-[${height}] bg-[#cfcfcf]`} />
          {index !== OptionGroups.length - 1 && <div className="w-0.5 h-full bg-[#cfcfcf]" />}
        </>
      ))}
    </div>
  );
};

export default FilterGroup;
