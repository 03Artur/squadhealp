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
const normalizeCardNumber = value => {
    if (!value) {
        return value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');
    let i = 4;
    let result = onlyNums;
    while (i < result.length) {
        result = `${result.slice(0, i)} ${result.slice(i)}`;
        i += 5;
    }
    return result;
};


const normalizeExpiry = value => {
    if (!value) {
        return value;
    }


    if(value.length===1&&value[0]>1){
        value = `0`+value;
    }
    let template = "MMYY";
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length > 2)
        return `${onlyNums.slice(0, 2)} / ${onlyNums.slice(2)}`;
    return onlyNums;
};

const normalizeCVC = value => {
    return value.replace(/[^\d]/g, '');
};

const ContestPaymentForm = (props) => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field normalize={normalizeCardNumber} pattern={/\d*/} name={'number'} component={'input'} maxLength={'19'}
                   type='tel' placeholder={'Card Number'}/>
            <Field  normalize={normalizeExpiry} pattern={/\d*/} name={'expiry'} component={'input'} maxLength={'7'}
                   type='tel' placeholder={'MM / YY'}/>
            <Field   normalize={normalizeCVC} pattern={/\d*/} name={'cvc'} component={'input'} maxLength={'3'}
                   type='tel' placeholder={'CVC'}/>
        </form>
    )
};

ContestPaymentForm.propTypes = {};

ContestPaymentForm.defaultPros = {};


export default reduxForm({
    form: FORM_NAMES.PAYMENT_FORM,
})(ContestPaymentForm)

