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
import {isRequired, notEmpty} from "../../../../utils/reduxForm/validateValue";
import {postMessageActionCreator} from "../../../../actions/actionCreators/chatActionCreators";


export const MessageInput = ({input, meta, ...props}) => {


    return <input className={styles.messageInput} {...input}/>
};

MessageInput.propTypes = {};

export const MessageButton = (props) => {

    return (
        <div className={styles.messageButton}>
            <Icon onClick={props.onClick} size={'30px'} color={'#fff'} path={mdiSend}/>
        </div>
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

        props.sendMessageAction(props.chatId, {
            value: values.message,
        })
    };
    const submit = handleSubmit(onSubmit);
    return (
        <form onSubmit={submit} className={styles.container}>
            <Field name={'message'} validate={[notEmpty, isRequired]} component={MessageInput}/>
            <MessageButton onClick={submit}/>
        </form>
    )
};


function mapStateToProps(state) {
    const {chatId} = state.chatReducer;
    const {user} = state.authorizationReducer;
    return {
        chatId,
        user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessageAction: (chatId, message) => dispatch(postMessageActionCreator(chatId,message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: FORM_NAMES.MESSAGE_FORM,
    })(MessageForm)
);
