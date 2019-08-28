/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Icon from '@mdi/react'
import {mdiSend} from '@mdi/js';


import styles from './MessageForm.module.scss';
import {FORM_NAMES} from "../../../../constants";
import {sendMessageActionCreator} from "../../../../actions/chatActionCreators";
import {isRequired, notEmpty} from "../../../../utils/reduxForm/validateValue";
import authorizationReducer from "../../../../reducers/authorization/authorizationReducer";


export const MessageInput = ({input, meta, ...props}) => {


    return <input {...input}/>
};

export const MessageButton = (props) => {

    return (
        <Icon onClick={props.onClick} path={mdiSend}/>
    );
};
MessageButton.propTypes = {
    onClick: PropTypes.func,
};

MessageButton.defaultProps = {
    onClick: function () {

    }
};


const MessageForm = (props) => {

    const {handleSubmit} = props;

    const onSubmit = (values) => {

        props.sendMessageAction(props.room, {
            value: values.message,
            authorId: props.user.id,
            timestamp: '12:21',
        })
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <Field name={'message'} validate={[notEmpty, isRequired]} component={MessageInput}/>
            <MessageButton onClick={handleSubmit}/>
        </form>
    )
};


function mapStateToProps(state) {
    const {room,} = state.chat;
    const {user} = state.authorizationReducer;
    return {
        room,
        user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessageAction: (room, data) => dispatch(sendMessageActionCreator(room, data))
    }
}

export default reduxForm({
    form: FORM_NAMES.MESSAGE_FORM,
})(MessageForm);
