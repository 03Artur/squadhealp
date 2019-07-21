import React from 'react';
import {Field, reduxForm} from 'redux-form';
import SubmitButton from '../buttons/SubmitButton/SubmitButton';
import Input from '../inputs/Input/Input'
import {emailValidation, passwordValidation} from './../../../utils/reduxFormValuesValidations'


const LoginForm = props => {
    const {handleSubmit} = props;


    return (
        <div>
            <Field placeholder="email" name="email" type='email' component={Input} validate={emailValidation}
                   testProps={"testPropHere"}/>
            <Field placeholder='password' name="password" isPassword={true} validate={passwordValidation}
                   component={Input} type="password"/>
            <SubmitButton onClick={handleSubmit}>LOGIN</SubmitButton>
        </div>
    )
};


export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

