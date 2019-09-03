import React, {useEffect} from 'react';
import {connect} from 'react-redux';
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

        const path = props.chatId ? `${PATHS.MESSAGES_CHAT}/${props.chatId}`:PATHS.MESSAGES;
        props.history.push(path);

    }, [props.chatId]);

    return (
        <div className={styles.chatPageContainer}>
            <ChatHeader/>
            <div className={styles.contentContainer}>
                <ChatMenu/>
                <Route exact path={PATHS.MESSAGES} component={EmptyContent}/>
                <Route path={`${PATHS.MESSAGES_CHAT}/:id`} component={Chat}/>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const {chatId} = state.chatReducer;
    return {
        chatId,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
