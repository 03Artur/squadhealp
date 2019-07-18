import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import goodsReducers from './goodsReducers';
import authorizationReducer from './authorizationReducer';



const appReducer = combineReducers({
    goodsReducers,
    authentication: authorizationReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
