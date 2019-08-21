import React, {Component, Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './CreditCard.module.scss';


const CreditCard = (props) => {

    const {number, expiry, cvc} = props;


    const formatContent = (value, format) => {
        return value ? `${value}${format.slice(value.length)}` : format;
    };

    return (
        <div className={styles.card}>
            <div style={props.flip ? {
                transform: 'rotateY(180deg)'
            } : undefined} className={styles.frontSide}>
                <div className={styles.numberContainer}>{
                    formatContent(number, '**** **** **** ****')
                }</div>
                <div className={styles.expiryContainer}>{
                    formatContent(expiry, '** / **')
                }</div>
            </div>
            <div style={props.flip ? {

                transform: 'rotateY(360deg)'
            } : {}} className={styles.backSide}>
                <span>
                    {
                        `CVC: ${formatContent(cvc, '***')}`
                    }
                </span>
            </div>
        </div>
    )
};

CreditCard.propTypes = {
    number: PropTypes.string,
    expiry: PropTypes.string,
    cvc: PropTypes.string,
    flip: PropTypes.bool,
};

CreditCard.defaultProps = {
    flip: false,
};


export default CreditCard;
