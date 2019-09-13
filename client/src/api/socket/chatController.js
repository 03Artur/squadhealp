
import store from "../../store";
import {getChatActionCreator, getMessageActionCreator} from "../../actions/actionCreators/chatActionCreators";

export const onGetMessage = ({chatId,messageId}) => store.dispatch(getMessageActionCreator(chatId,messageId));
export const onGetChat = chatId => store.dispatch(getChatActionCreator(chatId));


//export const onTyping = ({chatId, userId}) => store.dispatch();