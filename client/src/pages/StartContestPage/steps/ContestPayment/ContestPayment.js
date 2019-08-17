/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */


/*
* styles
* */
import styles from './ContestPayment.module.scss';
import ContestPaymentForm from "../../../../components/forms/createContestForms/ContestPaymentForm/ContestPaymentForm";

/*
* UTILS
* */



const ContestPayment = (props) => {


    return (
        <Fragment>
            <h3>Checkout</h3>
            <div className={styles.checkoutContainer}>
            <ContestPaymentForm/>
            </div>
        </Fragment>
    )
};

ContestPayment.propTypes = {

};

ContestPayment.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestPayment)
