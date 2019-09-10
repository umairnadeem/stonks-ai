import { State, Action, Stock } from '../_types';
import { STOCKS } from '../_constants';

export const stockReducer = (state: State, action: Action): Stock[] => {
  switch (action.type) {
    case STOCKS.ADD:
      return action.payload;
    default:
      throw new Error('Stock cannot be added.');
  }
};
