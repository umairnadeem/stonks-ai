import { State, Action } from '../_types';
import { STOCKS } from '../_constants';

export default (state: State, action: Action) => {
  switch (action.type) {
    case STOCKS.ADD:
      return { ...state, stocks: action.payload };
    default:
      throw new Error('Stock cannot be added.');
  }
};
