import React, { useReducer } from 'react';
import { rootReducer } from '../_reducers';

const initialState = {};

export const Context: React.Context<any> = React.createContext(initialState);

export default ({ children }) => {
  const reducer = useReducer(rootReducer, initialState);
  return <Context.Provider value={reducer}>{children}</Context.Provider>;
};
