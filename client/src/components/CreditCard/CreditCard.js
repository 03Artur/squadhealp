import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from  './CreditCard.module.scss';






const CreditCard = (props) => {


    return (
            <div className={styles.card}>
                <div className={styles.frontSie}>
                    <span>Front</span>
                </div>
                <div className={styles.backSide}>
                    <span>Back side</span>
                </div>
            </div>
    )
};

CreditCard.propTypes = {

};

CreditCard.defaultPros = {

};



export default CreditCard;
