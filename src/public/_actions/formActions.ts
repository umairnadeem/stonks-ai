import { STOCKS } from '../_constants';

export const submitForm = (ticker, dispatch) => {
  setTimeout(() => dispatch({
    type: STOCKS.ADD,
    payload: [{ ticker, data: [[1, 2]], color: '', accent: '' }],
  }), 700);
};
