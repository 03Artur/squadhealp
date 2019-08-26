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
import {creditCardCVC, creditCardExpiry, creditCardNumber, isRequired} from "../../../../utils/reduxForm/validateValue";

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


const Input = ({input, title, meta, ...props}) => {

    return (
        <label className={styles.label}>
            <div className={styles.inputTitle}>{title}</div>
            <input  {...props} {...input}
                    className={[styles.input, meta.error && meta.touched ? styles.inputError : undefined].join(' ')}/>
        </label>
    )
};


const ContestPaymentForm = (props) => {

    const {handleSubmit} = props;


    const renderFields = () => {


    };

    return (
        <form onSubmit={handleSubmit}>
            <Field title={"Card Number"} normalize={normalizeCardNumber} pattern={/\d*/} name={'number'}
                   component={Input}
                   maxLength={'19'}
                   validate={[isRequired, creditCardNumber]}
                   type='tel' placeholder={'Card Number'}/>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Field title={"Expires"} normalize={normalizeExpiry} pattern={/\d*!/} name={'expiry'}
                           component={Input}
                           maxLength={'7'}
                           validate={[isRequired, creditCardExpiry]}
                           type='tel' placeholder={'MM / YY'}/>
                </div>
                <div className={styles.col}>

                    <Field title={"CVC"} onBlur={props.onCvcBlur} onFocus={props.onCvcFocus} normalize={normalizeCVC}
                           validate={[isRequired, creditCardCVC]}
                           pattern={/\d*!/}
                           name={'cvc'} component={Input} maxLength={'3'}
                           type='tel' placeholder={'CVC'}/>
                </div>
            </div>
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

