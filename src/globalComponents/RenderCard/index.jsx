import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardContext from '../../utils/context/cardContext';
import CardOverview from './CardOverview';

const RenderCard = ({
  id,
  title,
  description,
  overviewTitle,
  overviewDescription,
  deadline,
  alertText,
  areas,
  subAreas,
  detailContent,
  align,
  direct,
  unread,
}) => {
  const { cardLookupTable, setCardLookupTable } = useContext(CardContext);

  useEffect(() => {
    console.log(id, cardLookupTable);
    setCardLookupTable((prevTable) => ({
      ...prevTable,
      [id]: {
        title,
        overviewTitle,
        overviewDescription,
        description,
        deadline,
        alertText,
        areas,
        subAreas,
        detailContent,
      },
    }));
  }, [
    id,
    overviewTitle,
    overviewDescription,
    title,
    description,
    deadline,
    alertText,
    areas,
    subAreas,
    detailContent,
  ]);

  return <CardOverview id={id} align={align} direct={direct} unread={unread} />;
};

RenderCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  overviewTitle: PropTypes.string.isRequired,
  overviewDescription: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  alertText: PropTypes.string,
  areas: PropTypes.array,
  subAreas: PropTypes.array,
  detailContent: PropTypes.any,
  upcoming: PropTypes.bool,
};

export default RenderCard;
