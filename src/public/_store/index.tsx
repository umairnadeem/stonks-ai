import React, { useReducer } from 'react';
import { reducer } from '../_reducers';
import { State, Action } from '../_types';

export default ({ children }) => {
  const initialState = {
    stocks: [],
  };
  const store = useReducer(reducer, initialState);
  const { Provider } = React.createContext<[State, React.Dispatch<Action>]>(store);

  return (
  <Provider value={store}>
    {children}
  </Provider>
  );
};

