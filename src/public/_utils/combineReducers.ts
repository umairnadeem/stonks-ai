// import { useReducer } from 'react';
import { PreStore, Reducer } from '../_types';

/**
 * Combines all the reducers into one store by firing all of them upon each dispatch
 * @param store {PreStore} - A store-like object with reducers as values
 */
export const combineReducers = (store: PreStore): Reducer => {
  const keys = Object.keys(store);
  return (state, action) => keys.reduce(
    (accum, key) => ({
      ...accum,
      [key]: store[key](state, action),
    }), {});
};
