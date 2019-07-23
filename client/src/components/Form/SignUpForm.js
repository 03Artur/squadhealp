//REACT
import React from 'react';
//COMPONENTS
import Input from './inputs/Input/Input';
import InputRadio from './inputs/InputRadio/InputRadio';
import SubmitButton from './buttons/SubmitButton/SubmitButton';
//REDUX & FRIENDS
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
//UTILS
import {ROLE} from '../../constants'
import * as VALIDATION from '../../utils/reduxFormValuesValidations'
//STYLES
import styles from './AuthorizationForm.module.scss'


let SignUpForm = (props) => {
    const {handleSubmit} = props;
    const renderField = (name, type, validate, component, placeholder, value = '') => {
        return (

            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate} value={value}/>
            </div>
        )
    };
    return (
        <div className={styles.formContainer}>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>{
                    renderField('firstName', 'text', VALIDATION.nameValidation, Input, 'First name')
                }</div>
                <div className={styles.fieldCol}>{
                    renderField('lastName', 'text', VALIDATION.nameValidation, Input, 'Last name')
                }</div>
            </div>
            <div className={styles.fieldRow}>{
                renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
            }</div>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>                    {
                    renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
                <div className={styles.fieldCol}>       {
                    renderField('passwordConfirmation', 'password', VALIDATION.passwordValidation, Input, 'Password Confirmation')
                }</div>
            </div>
            <div className={styles.fieldRow}>
                <Field id='radioBuyer' name='role' component={InputRadio} type='radio' value={ROLE.BUYER}
                       title="Join As a Buyer"/>
            </div>
            <div className={styles.fieldRow}>
                <Field id='radioCreative' name='role' component={InputRadio} type='radio' value={ROLE.CREATIVE}
                       title="Join As a Creative"/>
            </div>
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <SubmitButton onClick={handleSubmit}>{'create account'}</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

SignUpForm = reduxForm({
    // a unique name for the form
    form: 'signUpForm',
})(SignUpForm);

let mapStateToProps = state => ({
    initialValues: state.signUpFormReducer
});

export default connect(mapStateToProps)(SignUpForm);
