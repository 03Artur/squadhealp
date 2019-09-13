import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './MessageList.module.scss';
import MessageItem from "./MessageItem/MessageItem";
import classNames from 'classnames';

const MessageList = (props) => {

    const {messages} = props;

    const renderMessages = () => {
        if (messages) {
            return messages.map(message => <MessageItem key={message.createdAt} message={message}/>)
        }
    };

    return (
        <ul className={classNames(props.className, styles.container)}>
            {renderMessages()}
        </ul>
    )
};

MessageList.propTypes = {
    className: PropTypes.string,
};

MessageList.defaultProps = {

};

const mapStateToProps = store => {
    const {messages} = store.chatsMessagesReducer;
    const {chatId} = store.chatReducer;
    return {
        messages: messages ? messages.get(chatId) : null,
    }
};

export default connect(mapStateToProps)(MessageList)
