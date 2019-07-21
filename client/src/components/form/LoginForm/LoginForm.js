import React from 'react';
import {Field, reduxForm} from 'redux-form';
import SubmitButton from '../buttons/SubmitButton/SubmitButton';
import Input from '../inputs/Input/Input'

const email = value =>
     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;


const LoginForm = props => {
    const {handleSubmit} = props;



    return (
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <Field placeholder="email" name="email" type='email' component={Input} validate={email} testProps={"testPropHere"} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field placeholder='password' name="password" isPassword={true} component={Input} type="password"/>
            </div>
            <SubmitButton onClick={handleSubmit}>LOGIN</SubmitButton>
        </div>
    )
};




export default reduxForm({
    // a unique name for the form
    form: 'login'
})( LoginForm);

