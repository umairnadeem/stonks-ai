import React, { useReducer } from 'react';
import { stockReducer } from '../_reducers';
import { State, Action } from '../_types';

const initialState = {};
const dispatch = () => '';
export const Context = React.createContext<[State, React.Dispatch<Action>]>([
  initialState,
  dispatch,
]);

export default ({ children }) => {
  const store = useReducer(stockReducer, initialState);
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
