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

const MessageItem = ({author,value,timestamp}) => {

    return (
        <li className={styles.container}>
            <AuthorIcon firstName={author.firstName} lastName={author.lastName} src={author.profilePicture}/>
        </li>
    )
};

MessageItem.propTypes = {

    author: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        profilePicture: PropTypes.string,
    }),
    value: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
};

MessageItem.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem)
