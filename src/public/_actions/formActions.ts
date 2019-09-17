import { STOCKS } from '../_constants';

export const submitForm = (ticker, dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: STOCKS.ADD,
        payload: { ticker, data: (new Array(100)).fill(0).map(() => Math.random()) },
      }),
    700,
  );
};
