import React, { useState } from 'react';

const initialState = {};
const Context = React.createContext(initialState);

export default ({ children }) => {
  const state = useState(initialState);

  return (
  <Context.Provider value={state}>
    {children}
  </Context.Provider>
  );
};

