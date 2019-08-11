import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authorizationReducer from './authorization/authorizationReducer';
import authorizationModeReducer from './authorization/authorizationModeReducer';
import {authorizationFormReducer} from './formReducers'
import adminUsersReducer from './adminUsersReducer';
import createContestReducer from "./contest/createContestReducer";
import createContestStepsReducer from './contest/createContestStepsReducer'
import createContestTaskTypesReducer from "./contest/createContestTaskTypesReducer";
import createContestQueryReducer from "./contest/createContestQueryReducer";

const appReducer = combineReducers({
    authorization: authorizationReducer,
    authorizationMode: authorizationModeReducer,
    adminUsers: adminUsersReducer,

    createContest: createContestReducer,
    createContestQuery: createContestQueryReducer,
    createContestSteps: createContestStepsReducer,
    createContestTaskTypes: createContestTaskTypesReducer,

    form: formReducer,
    authorizationForm: authorizationFormReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
