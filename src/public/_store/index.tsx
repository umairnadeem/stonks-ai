import React, { useReducer } from 'react';

const initialState = {};
const { Provider } = React.createContext(initialState);

export default ({ children }) => {
  const state = useReducer(initialState);

  return (
  <Provider value={state}>
    {children}
  </Provider>
  );
};

