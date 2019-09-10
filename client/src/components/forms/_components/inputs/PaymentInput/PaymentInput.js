
import React from 'react';
import styles from './PaymentInput.module.scss';

const PaymentInput = ({input, title, meta, ...props}) => {
    return (
        <label className={styles.label}>
            <div className={styles.inputTitle}>{title}</div>
            <input  {...props} {...input}
                    className={[styles.input, meta.error && meta.touched ? styles.inputError : undefined].join(' ')}/>
        </label>
    )
};




export default PaymentInput
