import { useReducer } from 'react';
import { Store, PreStore } from '../_types';

export const combineReducers = (store: PreStore): Store => {
  const keys = Object.keys(store);
  return keys.reduce(
    (accum, key) => ({
      ...accum,
      [key]: useReducer(keys[key], {}),
    }), {});
};
