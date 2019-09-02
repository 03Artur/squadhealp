import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authorizationReducer from './authorization/authorizationReducer';
import authorizationMode from './authorization/authorizationModeReducer';
import adminUsers from './adminUsersReducer';
import contestCreation from "./contest/contestCreation";
import getContests from './contest/getContestsReducer';
import affiliateDashboardNav from './navigation/affiliateDashboardNavReducer';
import homeUserNavReducer from './navigation/homeUserNavReducer';
import homeNavReducer from './navigation/homeNavReducer';
import affiliateDashboardUserNav from './navigation/affiliateDashboardUserNavReduce';
import affiliateDashboardMenu from './menu/affiliateDashboardMenuReducer'
import contestCreationSteps from "./contest/contestCreationSteps";
import contestCreationQuery from "./contest/contestCreationQuery";
import chats from "./chat/chatsReducer";
import chatMenu from "./menu/chatMenuReducer";
import chatQuery from "./chat/chatQueryReducer";
import chat from "./chat/chatReducer";
import chatsParticipants from "./chat/chatsParticipantsReducer";


const appReducer = combineReducers({
    authorizationReducer,
    authorizationMode,
    adminUsers,
    form: formReducer,
    getContests,
    affiliateDashboardUserNav,
    affiliateDashboardNav,
    homeUserNav: homeUserNavReducer,
    homeNav:  homeNavReducer,
    affiliateDashboardMenu,

    contestCreation,
    contestCreationSteps,
    contestCreationQuery,

    chat,
    chats,
    chatsParticipants,
    chatQuery,
    chatMenu


});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
