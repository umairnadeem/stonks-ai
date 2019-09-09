import { State, Action } from '../_types';
import { STOCKS } from '../_constants';

export const stockReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case STOCKS.ADD:
      return { ...state, stocks: action.payload };
    default:
      throw new Error('Stock cannot be added.');
  }
};
