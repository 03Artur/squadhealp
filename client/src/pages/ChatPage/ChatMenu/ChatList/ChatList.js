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
            return chats.map(chat => <ChatItem key={chat.room} {...chat}/>)
        }
    };

    return (
        <ul className={[styles.list,props.className].join(' ')}>
            {
                renderChatItems()
            }
        </ul>
    )
};

ChatList.propTypes = {
    className: PropTypes.string
};

ChatList.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => {
    return store.allChats;
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
