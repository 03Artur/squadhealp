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


export const MessageInput = ({input, meta, ...props}) => {


    return <textarea {...input}/>
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

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <Field component={MessageInput}/>
            <MessageButton onClick={handleSubmit}/>
        </form>
    )
};




export default reduxForm({
    form: FORM_NAMES.MESSAGE_FORM,
})(MessageForm);
