import React from 'react';

export const createContext = (rootReducer) => React.createContext(rootReducer());
