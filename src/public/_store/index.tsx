import React, { useReducer } from 'react';
import { reducer } from '../_reducers';
import { State, Action } from '../_types';

const initialState = {
  stocks: [],
};
const dispatch = () => '';

export const context = React.createContext<[
  State,
  React.Dispatch<Action>,
]>([initialState, dispatch]);

export default ({ children }) => {
  const store = useReducer(reducer, initialState);

  return (
  <context.Provider value={store}>
    {children}
  </context.Provider>
  );
};
