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
import styles from './MessageList.module.scss';
import MessageItem from "./MessageItem/MessageItem";

/*
* UTILS
* */


const MessageList = (props) => {

    const {messages} = props;

    const renderMessages = () => {

        if (messages) {
            return messages.map(message => <MessageItem key={message.createdAt} message={message}/>)
        }
    };

    return (
        <ul className={[props.className, styles.container].join(' ')}>
            {
                renderMessages()
            }
        </ul>
    )
};

MessageList.propTypes = {
    className: PropTypes.string,
};

MessageList.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {messages} = store.chatsMessagesReducer;
    const {chatId} = store.chatReducer;
    return {
        messages: messages.get(chatId),
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
