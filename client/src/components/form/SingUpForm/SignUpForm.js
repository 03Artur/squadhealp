//REACT
import React from 'react';
//COMPONENTS
import Input from '../inputs/Input/Input'
import SubmitButton from '../buttons/SubmitButton/SubmitButton';
//REDUX & FRIENDS
import {Field, reduxForm} from 'redux-form';
//UTILS
import {ROLE} from '../../../constants'
import * as VALIDATION from '../../../utils/reduxFormValuesValidations'
//STYLES
import styles from './SignUpForm.module.scss'


const SignUpForm = ({handleSubmit, ...props}) => {


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
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <Field placeholder="Email Address" name="email" validate={VALIDATION.emailValidation}
                               component={Input} type="email"/>
                    </div>
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
                               type="password"/>
                    </div>
                </div>
            </div>
            <div>
                <label>Role</label>
                <div>
                    <label><Field name="role" component="input" type="radio" value={`${ROLE.BUYER}`}/>Join As a
                        Buyer</label>
                    <label><Field name="role" component="input" type="radio" value={`${ROLE.CREATIVE}`}/>Join As a
                        Creative</label>
                </div>
            </div>
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default reduxForm({
    // a unique name for the form
    form: 'signUp'
})(SignUpForm);

