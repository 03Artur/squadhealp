import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authorization from './authorization/authorizationReducer';
import authorizationMode from './authorization/authorizationModeReducer';
import adminUsers from './adminUsersReducer';
import contestCreation from "./contest/contestCreationReducer";
import getContests from './contest/getContestsReducer';
import affiliateDashboardNav from './navigation/affiliateDashboardNavReducer';
import homeUserNavReducer from './navigation/homeUserNavReducer';
import homeNavReducer from './navigation/homeNavReducer';
import affiliateDashboardUserNav from './navigation/affiliateDashboardUserNavReduce';
import affiliateDashboardMenu from './menu/affiliateDashboardMenuReducer'


const appReducer = combineReducers({
    authorization,
    authorizationMode,
    adminUsers,
    contestCreation,
    form: formReducer,
    getContests,
    affiliateDashboardUserNav,
    affiliateDashboardNav,
    homeUserNav: homeUserNavReducer,
    homeNav:  homeNavReducer,
    affiliateDashboardMenu,
/*
    siteNavigation: siteNavigationReducer,
*/
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
