import React, {Component, Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';


import {connect} from 'react-redux';
import {submit, formValueSelector} from 'redux-form';
import _ from 'lodash';

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

    const [flipCard, setFlipCard] = useState(false);
    const {tasks} = props;

    const submit = (values) => {
        const creditCard = _.clone(values);
        creditCard.number = creditCard.number.replace(/ /g, '');
        creditCard.expiry = creditCard.expiry.replace(/ /g, '');
        props.contestPaymentAction(props.contestId, creditCard);
    };

    const renderOrderSummaryItem = () => {
        return (
            tasks.map(item => (
                <li key={item.id} className={styles.billItem}>
                    <span>{`${item.type} contest: `}</span>
                    <span className={styles.price}>{`${item.cost} \$`}</span>
                </li>
            ))
        )
    };

    const renderOrderSummary = () => {
        return (
            <div className={styles.billContainer}>
                <h2>Order summary</h2>
                <ul className={styles.billList}>
                    {renderOrderSummaryItem()}
                </ul>
                <div className={styles.totalContainer}>
                    <h3>Total: </h3>
                    <span className={styles.price}>{`${tasks.reduce((total, item) => (total + item.cost), 0)} \$`}</span>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.checkoutContainer}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <CreditCard flip={flipCard} {...props.cardValues}/>
                        <div className={styles.formContainer}>
                            <ContestPaymentForm onCvcBlur={() => setFlipCard(false)}
                                                onCvcFocus={() => setFlipCard(true)}
                                                onSubmit={submit}/>
                        </div>
                    </div>
                    {renderOrderSummary()}
                </div>
            </div>
            <StartContestNav onPrevClick={props.prevStepAction}
                             onNextClick={props.submitContestPaymentFormAction}
                             nextButtonText={"Pay Now"}/>
        </div>
    )
};

ContestPayment.propTypes = {};

ContestPayment.defaultProps = {};


const mapStateToProps = store => {
    const {contestId} = store.contestCreationQuery;
    const {tasks} = store.contestCreation;
    const selector = formValueSelector(FORM_NAMES.PAYMENT_FORM);
    const cardValues = selector(store, 'number', 'cvc', 'expiry');
    return {
        tasks,
        contestId,
        cardValues,
    };
};
const mapDispatchToProps = dispatch => ({
    submitContestPaymentFormAction: () => dispatch(submit(FORM_NAMES.PAYMENT_FORM)),
    contestPaymentAction: (contestId, creditCard) => dispatch(contestPaymentActionCreator(contestId, creditCard)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestPayment)
