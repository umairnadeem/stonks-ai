import { combineReducers } from '../_utils';
import { stockReducer as stocks } from './stockReducer';

export const rootReducer = combineReducers({
  stocks,
});