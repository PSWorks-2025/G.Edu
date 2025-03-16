import React from 'react';
import PropTypes from 'prop-types';
import { ComponentTitle, SubtleText } from './Typography';

const CardWithImage = ({ title, subtitle, date }) => {

  return (
    <div className="rounded-lg overflow-hidden w-57 h-57.25 shadow-lg flex flex-col">
      <div className="w-57 min-h-35.75 bg-[#c5bebe] p-2 ">
        <span className="float-right bg-white px-2 py-1.5 rounded-sm">
          <SubtleText className="text-[#646464]">{date}</SubtleText>
        </span>
      </div>
      <div className="bg-white w-57 h-full p-4 flex flex-col justify-between">
        <ComponentTitle>
          {title.length < 19 ? title : title.substr(0, 16) + '...'}
        </ComponentTitle>
        <SubtleText className="text-[#646464]">{subtitle}</SubtleText>
      </div>
    </div>
  );
};

CardWithImage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, // URL for navigation
};

export default CardWithImage;
