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
import styles from './ContestPaymentForm.module.scss';
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


    if (value.length === 1 && value[0] > 1) {
        value = `0` + value;
    }
    const onlyNums = value.replace(/[^\d]/g, '');

    if (onlyNums.length > 2) {
        return `${onlyNums.slice(0, 2)} / ${onlyNums.slice(2)}`;
    }
    return onlyNums;
};

const normalizeCVC = value => {
    return value.replace(/[^\d]/g, '');
};

const ContestPaymentForm = (props) => {

    const {handleSubmit} = props;

    const renderField = (name, title,normalize,maxLength) => {
        return (
            <label>
                <div>
                    {
                        title
                    }
                </div>
                <Field  normalize={normalize} maxLength ={maxLength} component={'input'}/>
            </label>
        )
    };

    const renderFields = () => {


    };

    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.label}>
                <span>Card number</span>
                <br/>
                <Field normalize={normalizeCardNumber} pattern={/\d*/} name={'number'} component={'input'}
                       maxLength={'19'}
                       type='tel' placeholder={'Card Number'}/>
            </label>
            <label className={styles.label} htmlFor="">
                <span>* Expires</span>
                <br/>
                <Field normalize={normalizeExpiry} pattern={/\d*/} name={'expiry'} component={'input'} maxLength={'7'}
                       type='tel' placeholder={'MM / YY'}/>
            </label>
            <label className={styles.label} htmlFor="">
                <span>* Security Code</span>
                <br/>
                <Field onBlur={props.onCvcBlur} onFocus={props.onCvcFocus} normalize={normalizeCVC} pattern={/\d*/}
                       name={'cvc'} component={'input'} maxLength={'3'}
                       type='tel' placeholder={'CVC'}/>
            </label>
        </form>
    )
};

ContestPaymentForm.propTypes = {
    onCvcBlur: PropTypes.func,
    onCvcFocus: PropTypes.func,
};

ContestPaymentForm.defaultProps = {
    onCvcBlur: (e) => {

    },
    onCvcFocus: (e) => {

    },
};


export default reduxForm({
    form: FORM_NAMES.PAYMENT_FORM,
})(ContestPaymentForm)

