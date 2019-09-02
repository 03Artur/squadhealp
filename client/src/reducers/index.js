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
import chatMenu from "./menu/chatMenuReducer";

//CHAT
import chatsQueryReducer from "./chat/chatsQueryReducer";
import chatReducer from "./chat/chatReducer";
import chatsParticipantsReducer from "./chat/chatsParticipantsReducer";
import chatsMessagesReducer from "./chat/chatsMessagesReducer";
import chatsReducer from "./chat/chatsReducer";


const appReducer = combineReducers({
    authorizationReducer,
    authorizationMode,
    adminUsers,
    form: formReducer,
    getContests,
    affiliateDashboardUserNav,
    affiliateDashboardNav,
    homeUserNav: homeUserNavReducer,
    homeNav: homeNavReducer,
    affiliateDashboardMenu,

    contestCreation,
    contestCreationSteps,
    contestCreationQuery,


    chatMenu,
    chatReducer,
    chatsQueryReducer,
    chatsMessagesReducer,
    chatsReducer,
    chatsParticipantsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
