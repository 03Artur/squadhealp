import React from 'react';
import {Field, reduxForm} from 'redux-form';
import SubmitButton from '../buttons/SubmitButton/SubmitButton';
import Input from '../inputs/Input/Input'
import styles from '../SingUpForm/SignUpForm.module.scss'
import * as VALIDATION from "../../../utils/reduxFormValuesValidations";

const LoginForm = props => {
    const {handleSubmit} = props;


    return (
        <div className={styles.formContainer}>
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <Field placeholder="Email"
                               name="email"
                               type='email'
                               component={Input}
                               validate={VALIDATION.emailValidation}/>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <Field placeholder='password' name="password" isPassword={true}
                               validate={VALIDATION.passwordValidation}
                               component={Input} type="password"/>
                    </div>
                </div>
            </div>
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <SubmitButton onClick={handleSubmit}>Create account</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

