
import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import styles from './ContestPaymentForm.module.scss';
import {FORM_NAMES} from "../../../../constants";
import {creditCardCVC, creditCardExpiry, creditCardNumber, isRequired} from "../../../../utils/reduxForm/validateValue";
import {normalizeCardNumber, normalizeCVC, normalizeExpiry} from "../../../../utils/reduxForm/normalizeValue";
import PaymentInput from "../../_components/inputs/PaymentInput/PaymentInput";

const ContestPaymentForm = (props) => {

    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field title={"Card Number"} normalize={normalizeCardNumber} pattern={/\d*/} name={'number'}
                   component={PaymentInput}
                   maxLength={'19'}
                   validate={[isRequired, creditCardNumber]}
                   type='tel' placeholder={'Card Number'}/>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Field title={"Expires"} normalize={normalizeExpiry} pattern={/\d*!/} name={'expiry'}
                           component={PaymentInput}
                           maxLength={'7'}
                           validate={[isRequired, creditCardExpiry]}
                           type='tel' placeholder={'MM / YY'}/>
                </div>
                <div className={styles.col}>
                    <Field title={"CVC"} onBlur={props.onCvcBlur} onFocus={props.onCvcFocus} normalize={normalizeCVC}
                           validate={[isRequired, creditCardCVC]}
                           pattern={/\d*!/}
                           name={'cvc'} component={PaymentInput} maxLength={'3'}
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
    onCvcBlur: (e) => {},
    onCvcFocus: (e) => {},
};

export default reduxForm({
    form: FORM_NAMES.PAYMENT_FORM,
})(ContestPaymentForm)

