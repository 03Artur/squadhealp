//REACT
import React from 'react';
//COMPONENTS
import Input from './inputs/Input/Input';
import SubmitButton from './buttons/SubmitButton/SubmitButton';
//REDUX & FRIENDS
import {Field, reduxForm} from 'redux-form';
//UTILS

import * as VALIDATION from '../../utils/reduxFormValuesValidations'
//STYLES
import styles from './AuthorizationForm.module.scss'


let LoginForm = (props) => {
    const {handleSubmit} = props;
    const renderField = (name, type, validate, component, placeholder) => {
        return (

            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate}/>
            </div>
        )
    };
    return (
        <div className={styles.formContainer}>
            <div className={styles.fieldRow}>
                <div className={styles.col}>{
                    renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
                }</div>
                <div className={styles.col}>{
                    renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
            </div>
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <SubmitButton onClick={handleSubmit}>{'login'}</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
};








export default reduxForm({
    // a unique name for the form
    form: 'loginForm',
})(LoginForm);



