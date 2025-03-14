import React from 'react';

import { IoIosCheckmark } from 'react-icons/io';
import { components } from 'react-select';

const LearningResourcesFilterOption = (props) => {
  const { Option } = components;
  return (
    <Option {...props}>
      <div className="flex items-center justify-between h-8">
        <p>{props.data.label}</p>
        {props.isSelected && <IoIosCheckmark className="text-3xl" />}
      </div>
    </Option>
  );
};

export default LearningResourcesFilterOption;