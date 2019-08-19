import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authorizationReducer from './authorization/authorizationReducer';
import authorizationModeReducer from './authorization/authorizationModeReducer';
import adminUsersReducer from './adminUsersReducer';
import contestCreationReducer from "./contest/contestCreationReducer";
import getContestsReducer from './contest/getContestsReducer';

const appReducer = combineReducers({
    authorization: authorizationReducer,
    authorizationMode: authorizationModeReducer,
    adminUsers: adminUsersReducer,
    contestCreation: contestCreationReducer,
    form: formReducer,
    getContests: getContestsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
