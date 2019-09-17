import { STOCKS } from '../_constants';

export const submitForm = (ticker, dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: STOCKS.ADD,
        payload: { ticker, data: [2, 3, 4, 6, 2, 34, 32, 99] }
      }),
    700,
  );
};
