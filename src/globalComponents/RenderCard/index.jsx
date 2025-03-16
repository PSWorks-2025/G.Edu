import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardContext from '../../utils/context/cardContext';
import CardOverview1 from './CardOverview';

const RenderCard = ({
  id,
  title,
  description,
  deadline,
  alertText,
  areas,
  subAreas,
  detailContent,
}) => {
  const { cardLookupTable, setCardLookupTable } = useContext(CardContext);

  useEffect(() => {
    setCardLookupTable((prevTable) => ({
      ...prevTable,
      [id]: { title, description, deadline, alertText, areas, subAreas, detailContent },
    }));
  }, [id, title, description, deadline, alertText, areas, subAreas, detailContent]);

  return <CardOverview1 id={id} />;
};

RenderCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  alertText: PropTypes.string,
  areas: PropTypes.array,
  subAreas: PropTypes.array,
  detailContent: PropTypes.any,
};

export default RenderCard;
