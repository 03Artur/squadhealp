import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationReducer from './authorizationReducer';
import authorizationModeReducer from './authorizationModeReducer';
import {signUpFormReducer} from './formReducers'
import userReducer from './userReducer'


const appReducer = combineReducers({
    authorizationReducer,
    authorizationModeReducer,
    signUpFormReducer,
    userReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
