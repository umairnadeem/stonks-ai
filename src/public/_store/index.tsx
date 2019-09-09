import React, { useReducer } from 'react';
import { rootReducer } from '../_reducers';
import { State, Action, Store } from '../_types';

export default ({ children }) => {
  const store = rootReducer();
  const Context = React.createContext<Store>(store);
  const childrenWithStore = React.Children.map(children, (child) =>
  React.cloneElement(child, { Context }),
);
  return (
    <Context.Provider value={store}>
      {childrenWithStore}
    </Context.Provider>
  );
};
