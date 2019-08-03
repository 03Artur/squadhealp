import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authorizationReducer from './authorization/authorizationReducer';
import authorizationModeReducer from './authorization/authorizationModeReducer';
import {authorizationFormReducer} from './formReducers'
import adminUsersReducer from './adminUsersReducer';
import taskTypesReducer from './contest/taskTypeReducer';
import createContestReducer from "./contest/createContestReducer";

const appReducer = combineReducers({
    authorization: authorizationReducer,
    authorizationMode: authorizationModeReducer,
    authorizationForm: authorizationFormReducer,
    adminUsers: adminUsersReducer,
    form: formReducer,
    taskTypes: taskTypesReducer,
    createContest: createContestReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
