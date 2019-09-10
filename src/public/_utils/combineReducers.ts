// import { useReducer } from 'react';
import { PreStore, Reducer } from '../_types';

export const combineReducers = (store: PreStore): Reducer => {
  const keys = Object.keys(store);
  return (state, action) => keys.reduce(
    (accum, key) => ({
      ...accum,
      [key]: store[key](state, action),
    }), {});
};
