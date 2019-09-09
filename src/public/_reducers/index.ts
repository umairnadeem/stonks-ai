import { State, Action } from '../_types';

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'STOCKS_ADD':
      return { ...state, stocks: action.payload };
    default:
      throw new Error('Stock cannot be added.');
  }
};
