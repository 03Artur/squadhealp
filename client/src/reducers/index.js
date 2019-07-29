import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import authorizationReducer from './authorizationReducer';
import authorizationModeReducer from './authorizationModeReducer';
import {authorizationFormReducer} from './formReducers'
import adminUsersReducer from './adminUsersReducer'


const appReducer = combineReducers({
    authorizationReducer,
    authorizationModeReducer,
    authorizationFormReducer,
    adminUsersReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
