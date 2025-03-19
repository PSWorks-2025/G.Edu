import React from 'react';
import Select from 'react-select';

import FilterOption from './FilterOption';

const FilterGroup = ({ height, widthOfEachFilter, OptionGroups }) => {
  const generalStyle = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: '#fbfbfb',
      border: 'none',
      width: widthOfEachFilter,
      height: '100%',
      paddingLeft: '0.5rem',
      boxShadow: state.isFocused ? '0 0 0 1px #000000' : 'none',
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isDisabled ? '#f5f5f5' : state.isFocused ? '#202020' : '#fbfbfb',
      color: state.isDisabled ? '#f5f5f5' : state.isFocused ? '#fbfbfb' : '#202020',
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      '&:active' : {
        backgroundColor: state.isDisabled ? '#f5f5f5' : state.isFocused ? '#202020' : '#fbfbfb',
        color: state.isDisabled ? '#f5f5f5' : state.isFocused ? '#fbfbfb' : '#202020',
      }
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: '#fbfbfb',
      borderRadius: '1rem',
      boxShadow: '0 0 2rem 0 #d0d0d0',
      width: `calc(${widthOfEachFilter} * 1.4 )`,
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
      left: '0',
    }),
  };

  const standaloneStyle = {
    ...generalStyle,
    control: (styles, state) => ({
      ...generalStyle.control(styles, state),
      borderRadius: '0.5rem',
    }),
    menu: (styles) => ({
      ...generalStyle.menu(styles),
      left: '0',
    }),
  };

  return (
    <div className="ROBOTO_FONTS flex items-center" style={{ height: height }}>
      {OptionGroups.length === 1 ? (
        <Select
          styles={standaloneStyle}
          options={OptionGroups[0].options}
          className="h-full text-sm"
          style={{ width: widthOfEachFilter }}
          components={{
            IndicatorSeparator: () => null,
            Option: FilterOption,
          }}
          defaultValue={OptionGroups[0].options[0]}
          onChange={(selectedOption) => OptionGroups[0].set(selectedOption.value)}
        />
      ) : (
        OptionGroups.map((OptionGroup, index) => (
          <>
            <Select
              styles={
                index === 0
                  ? leftStyle
                  : index === OptionGroups.length - 1
                  ? rightStyle
                  : middleStyle
              }
              options={OptionGroup.options}
              className="h-full text-sm"
              style={{ width: widthOfEachFilter }}
              components={{
                IndicatorSeparator: () => null,
                Option: FilterOption,
              }}
              defaultValue={OptionGroup.options[0]}
              onChange={(selectedOption) => OptionGroup.set(selectedOption.value)}
            />
            {index !== OptionGroups.length - 1 && <div className="border-1 h-full border-[#cfcfcf]" />}
          </>
        ))
      )}
    </div>
  );
};

export default FilterGroup;
