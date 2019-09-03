/*
* React
* */
import React, {Component, Fragment, useState} from 'react';
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
import styles from './StartChatButton.module.scss';
import {createChatActionCreator} from "../../../actions/actionCreators/chatActionCreators";

/*
* UTILS
* */


const StartChatButton = (props) => {

    const [enable, setEnable] = useState(true);
    const onClick = () => {
        if (enable) {
            setEnable(false)
            props.createChatAction({
                participants: [props.userId]
            });
        }


    };

    return (
        <div onClick={onClick} className={[styles.container, enable ? undefined : styles.disable].join(' ')}>
            {
                `start chat with user ${props.userId}`
            }
        </div>
    )
};

StartChatButton.propTypes = {
    className: PropTypes.string,
    userId: PropTypes.number,
};

StartChatButton.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({
    createChatAction: (chat) => dispatch(createChatActionCreator(chat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartChatButton)
