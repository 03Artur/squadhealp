/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
/*
* Components
* */


/*
* styles
* */
import styles from './TaskPayment.module.scss';
import {FORM_NAMES} from "../../../../constants";
import {contestPaymentActionCreator} from "../../../../actions/payment/contestPaymentActionCreator";

/*
* UTILS
* */


const ContestPaymentForm = (props) => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name={'number'} component={'input'} type='tel' placeholder={'Card number'}/>
        </form>
    )
};

ContestPaymentForm.propTypes = {};

ContestPaymentForm.defaultPros = {};


export default reduxForm({
    form: FORM_NAMES.PAYMENT_FORM,
})(ContestPaymentForm)

