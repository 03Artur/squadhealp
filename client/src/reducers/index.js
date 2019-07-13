import { combineReducers } from 'redux';
import goodsReducers from './goodsReducers';

const appReducer = combineReducers({
  goodsReducers,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
