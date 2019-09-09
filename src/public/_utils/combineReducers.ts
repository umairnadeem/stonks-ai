import { useReducer } from 'react';

export const combineReducers = (store) => {
  const keys = Object.keys(store);
  return keys.reduce(
    (accum, key) => ({
      ...accum,
      [key]: useReducer(keys[key], {}),
    }), {});
};
