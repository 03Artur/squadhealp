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


let AuthorizationForm = (props) => {
    const {handleSubmit} = props;
    const renderField = (name, type, validate, component, placeholder) => {
        return (

            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate}/>
            </div>
        )
    };

    const renderSignUpFields = () => {
        return (
            <React.Fragment>
                <div className={styles.fieldRow}>

                    <div className={styles.fieldCol}>

                        {
                            renderField('firstName', 'text', VALIDATION.nameValidation, Input, 'First name')
                        }</div>
                    <div className={styles.fieldCol}>

                        {
                            renderField('lastName', 'text', VALIDATION.nameValidation, Input, 'Last name')
                        }</div>
                </div>
                <div className={styles.fieldRow}>
                    {
                        renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
                    }
                </div>
                <div className={styles.fieldRow}>
                    <div className={styles.fieldCol}>
                        {
                            renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                        }</div>
                    <div className={styles.fieldCol}>
                        {
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
            </React.Fragment>
        )
    };
    const renderLoginFields = () => {
        return (
            <React.Fragment>
                <div className={styles.fieldRow}>
                    <div className={styles.col}>{
                        renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
                    }</div>
                    <div className={styles.col}>{
                        renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                    }</div>
                </div>
            </React.Fragment>)
    };

    let submitButtonText = null;

    if (props.isLoginMode) {

        submitButtonText = 'login';
    } else {
        submitButtonText = 'create account';
    }


    return (
        <div className={styles.formContainer}>
            {
                props.isLoginMode?renderLoginFields():renderSignUpFields()
            }
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <SubmitButton onClick={handleSubmit}>{submitButtonText}</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        initialValues: state.signUpFormReducer
    }
};


AuthorizationForm = connect(mapStateToProps)(AuthorizationForm);


export default reduxForm({
    // a unique name for the form
    form: 'authorizationForm',
})(AuthorizationForm);



