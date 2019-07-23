import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationReducer from './authorizationReducers';
import {signUpFormReducer} from './formReducers'


const appReducer = combineReducers({
    authorizationReducer,
    signUpFormReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
