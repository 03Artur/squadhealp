import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authorizationReducer from './authorization/authorizationReducer';
import authorizationModeReducer from './authorization/authorizationModeReducer';
import adminUsersReducer from './adminUsersReducer';
import contestCreationReducer from "./contest/contestCreationReducer";

const appReducer = combineReducers({
    authorization: authorizationReducer,
    authorizationMode: authorizationModeReducer,
    adminUsers: adminUsersReducer,
    contestCreation: contestCreationReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
