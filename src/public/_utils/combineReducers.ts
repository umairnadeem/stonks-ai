import { useReducer } from 'react';
import { Store } from '../_types';

export const combineReducers = (store): Store => {
  const keys = Object.keys(store);
  return keys.reduce(
    (accum, key) => ({
      ...accum,
      [key]: useReducer(keys[key], {}),
    }), {});
};
