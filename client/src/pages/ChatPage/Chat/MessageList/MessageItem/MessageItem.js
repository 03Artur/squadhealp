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
import styles from './MessageItem.module.scss';
import AuthorIcon from "./AuthorIcon/AuthorIcon";
/*
* UTILS
* */

const MessageItem = (props) => {
    const {message: {authorId,value}, members,  user} = props;
    const author = members.find(user => user.id === authorId);
    return (
        <li className={styles.container}>
            <AuthorIcon firstName={author.firstName} lastName={author.lastName} src={author.profilePicture}/>
            <div className={[styles.valueContainer, authorId === user.id ? styles.myMessage : undefined].join(' ')}>
                {
                    value
                }
            </div>
        </li>
    )
};

MessageItem.propTypes = {

    message: PropTypes.shape({
        authorId: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,

};

MessageItem.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {members} = store.chat;
    const {user} = store.authorizationReducer;
    return {
        members,
        user,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem)
