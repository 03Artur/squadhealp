import React, {useEffect} from 'react';
import ChatHeader from "./ChatHeader/ChatHeader";
import Chat from "./Chat/Chat";
import ChatMenu from "./ChatMenu/ChatMenu";
import styles from './ChatPage.module.scss';
import {Route} from 'react-router-dom';
import {PATHS} from "../../constants";


const EmptyContent = (props) => {

    return (

        <div className={styles.emptyContentContainer}>
            <span className={styles.contentMessage}>Please select a chat to start messaging</span>
        </div>

    )
};

function ChatPage(props) {

    useEffect(() => {

        props.history.push(
            props.room?PATHS.MESSAGES:`${PATHS.MESSAGES_CHAT}/${props.room}`
        )

    },[props.room]);

    return (
        <div className={styles.chatPageContainer}>
            <ChatHeader/>
            <div className={styles.contentContainer}>
                <ChatMenu/>
                <Route path={`${PATHS.MESSAGES_CHAT}/:id`} component={Chat}/>
                <Route path={PATHS.MESSAGES} component={EmptyContent}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const {room} = state.chat;
    return {
        room
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default ChatPage;
