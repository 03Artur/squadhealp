import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationReducer from './authorizationReducers';
import {signUpFormReducer} from './formReducers'
import userReducer from './userReducers'


const appReducer = combineReducers({
    authorizationReducer,
    signUpFormReducer,
    userReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
