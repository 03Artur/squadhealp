/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
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


const ContestPaymentForm = ({handleSubmit, ...props}) => {


    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
};

ContestPaymentForm.propTypes = {};

ContestPaymentForm.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({
    contestPaymentAction: (contestId, creditCard) => dispatch(contestPaymentActionCreator(contestId,creditCard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: FORM_NAMES.PAYMENT_FORM,
    })(ContestPaymentForm)
)
