import React, { createContext, useState } from 'react';

const TabContext = createContext({});

const TabContextProvider = ({ children }) => {
  const [tab, setTab] = useState('Shopping');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabContextProvider };