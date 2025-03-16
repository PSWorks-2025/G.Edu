import { createContext, useState, useEffect } from 'react';

const CardContext = createContext({});

export const CardContextProvider = ({ children }) => {
  const [cardLookupTable, setCardLookupTable] = useState({});

  return (
    <CardContext.Provider
      value={{
        cardLookupTable,
        setCardLookupTable,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContext;
