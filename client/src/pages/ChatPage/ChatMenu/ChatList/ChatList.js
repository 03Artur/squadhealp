/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */


/*
* styles
* */
import styles from './ChatList.module.scss';
import ChatItem from "./ChatItem/ChatItem";

/*
* UTILS
* */


const ChatList = (props) => {

    const {chats} = props;


    const renderChatItems = () => {
        if (chats) {
            return chats.map(item => <ChatItem key={item.chat._id} lastMessage={item.lastMessage} chat={item.chat}/>)
        }
    };

    return (
        <ul className={[styles.list, props.className].join(' ')}>
            {
                renderChatItems()
            }
        </ul>
    )
};

ChatList.propTypes = {
    className: PropTypes.string
};

ChatList.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => {

    const {chats} = store.chatsReducer;
    const {messages} = store.chatsMessagesReducer;
    const {participants} = store.chatsParticipantsReducer;

    const chatsWithLastMessage = chats.map(chat => {
        const chatMessages = messages.get(chat._id);
        const lastMessage = chatMessages[chatMessages.length - 1];
        if (lastMessage) {
            lastMessage.author = participants.get(lastMessage.authorId);
        }
        return {
            chat,
            lastMessage,
        }
    });

    return {
        chats: chatsWithLastMessage,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
