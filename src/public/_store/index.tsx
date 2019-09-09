import React, { useReducer } from 'react';
import { rootReducer } from '../_reducers';
import { Store } from '../_types';

const initialState = {};

export const context = React.createContext<Store>(rootReducer);

export default ({ children }) => {
  return (
  <context.Provider value={initialState}>
    {children}
  </context.Provider>
  );
};
