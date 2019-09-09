import stocks from './stockReducer';
import { combineReducers } from '../_utils';

export const rootReducer = combineReducers({
  stocks,
});
