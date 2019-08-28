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
        return messages.map(message => <MessageItem key={message.timestamp} {...message}/>)
    };

    return (
        <ul className={styles.container}>
            {
                renderMessages()
            }
        </ul>
    )
};

MessageList.propTypes = {};

MessageList.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {messages} = store.chat;
    return {
        messages,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
