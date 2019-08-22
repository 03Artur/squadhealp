/*
* React
* */
import React, {Component, Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {submit, formValueSelector} from 'redux-form';
/*
* Components
* */


/*
* styles
* */
import styles from './ContestPayment.module.scss';
import ContestPaymentForm from "../../../../components/forms/createContestForms/ContestPaymentForm/ContestPaymentForm";
import CreditCard from "../../../../components/CreditCard/CreditCard";
import StartContestNav from "../../../../components/nav/StartContestNav/StartContestNav";
import {
    nextContestCreationStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import {contestPaymentActionCreator} from "../../../../actions/payment/contestPaymentActionCreator";
import {FORM_NAMES} from "../../../../constants";

/*
* UTILS
* */


const ContestPayment = (props) => {

    const submit = (values) => {
        values.number = values.number.replace(/ /g,'');
        values.expiry = values.expiry.replace(/ /g,'');


        props.contestPaymentAction(props.contestId, values);
    };
    const [flipCard, setFlipCard] = useState(false);



    return (
        <div className={styles.container}>
            <h3>Checkout</h3>
            <div className={styles.checkoutContainer}>

                <CreditCard flip={flipCard} {...props.cardValues}/>
                <ContestPaymentForm onCvcBlur={() => setFlipCard(false)} onCvcFocus={() => setFlipCard(true)}  onSubmitSuccess={() => {
                }} onSubmit={submit}/>
            </div>
            <StartContestNav nextButtonText={"Pay Now"} onPrevClick={props.prevStepAction} onNextClick={props.submitContestPaymentFormAction}/>
        </div>
    )
};

ContestPayment.propTypes = {};

ContestPayment.defaultPros = {};


const mapStateToProps = store => {
    const {query: {contestId}} = store.contestCreation;
    const selector = formValueSelector(FORM_NAMES.PAYMENT_FORM);

    const cardValues = selector(store, 'number', 'cvc', 'expiry');

    return {
        contestId,
        cardValues,
    };
};
const mapDispatchToProps = dispatch => ({
    submitContestPaymentFormAction: () => dispatch(submit(FORM_NAMES.PAYMENT_FORM)),
    contestPaymentAction: (contestId, creditCard) => dispatch(contestPaymentActionCreator(contestId, creditCard)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    nextContestCreationStepAction: () => dispatch(nextContestCreationStepActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestPayment)
