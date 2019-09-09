import stocks from './stockReducer';
import { combineReducers } from '../_utils';
import { Store } from '../_types';

export const rootReducer: Store = combineReducers({
  stocks,
});
