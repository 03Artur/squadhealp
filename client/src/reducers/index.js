import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationReducer, {authorizationModeReducer} from './authorizationReducers';
import {signUpFormReducer} from './formReducers'


const appReducer = combineReducers({
    authorizationReducer,
    signUpFormReducer,
    authorizationModeReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
