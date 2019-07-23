//REACT
import React from 'react';
//COMPONENTS
import Input from '../inputs/Input/Input';
import InputRadio from '../inputs/InputRadio/InputRadio';
import SubmitButton from '../buttons/SubmitButton/SubmitButton';

//REDUX & FRIENDS
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
//UTILS
import {ROLE} from '../../../constants'
import * as VALIDATION from '../../../utils/reduxFormValuesValidations'
//STYLES
import styles from './SignUpForm.module.scss'

import {signUpFormReducer} from '../../../reducers/formReducers'
const data = {
    role: ROLE.BUYER,
};

let SignUpForm = ({handleSubmit, ...props}) => {


    return (

        <div className={styles.formContainer}>

            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>
                    <div className={styles.fieldContainer}>
                        <Field name="firstName" component={Input} placeholder="First name" type="text"
                               validate={VALIDATION.nameValidation}/>
                    </div>
                </div>
                <div className={styles.fieldCol}>
                    <div className={styles.fieldContainer}>
                        <Field placeholder="Last name" name="lastName"
                               validate={VALIDATION.nameValidation}
                               component={Input} type="text"/></div>
                </div>
            </div>

            <div className={styles.fieldRow}>
                <div className={styles.fieldContainer}>
                    <Field placeholder="Email Address" name="email" validate={VALIDATION.emailValidation}
                           component={Input} type="email"/>
                </div>
            </div>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>
                    <div className={styles.fieldContainer}>
                        <Field placeholder="Password" name="password"
                               validate={VALIDATION.passwordValidation}
                               component={Input} type="password"/>
                    </div>
                </div>
                <div className={styles.fieldCol}>
                    <div className={styles.fieldContainer}>
                        <Field placeholder="Password Confirmation" name="confirmPassword"
                               component={Input}
                               validate={VALIDATION.confirmPasswordValidation}
                               type="password"/>
                    </div>
                </div>
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

                <div className={styles.fieldContainer}>
                    <SubmitButton onClick={handleSubmit}>Create account</SubmitButton>
                </div>

            </div>

        </div>
    )
};


SignUpForm = reduxForm({
    // a unique name for the form
    form: 'signUp'
})(SignUpForm);

SignUpForm = connect(state => ({initialValues: state.signUpFormReducer}
))(SignUpForm);
export default (SignUpForm);

