import React from 'react';
import {Field, reduxForm} from 'redux-form';
import SubmitButton from '../buttons/SubmitButton/SubmitButton';

const SignUpForm = props => {
    const {handleSubmit} = props;



    return (
        <div>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text"/>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text"/>
            </div>
            <div>

            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password"/>
               {/* <label htmlFor="confirmPassword">Confirm password</label>
                <Field name="confirmPassword" component="input" type="password"/>*/}
            </div>
            <div>
                <label>Role</label>
                <div>
                    <label><Field name="role" component="input" type="radio" value="1"/>Join As a Buyer</label>
                    <label><Field name="role" component="input" type="radio" value="2"/>Join As a Creative</label>
                </div>
            </div>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            <br/>
            <br/>
            <div>{
                props.user
            }</div>
        </div>
    )
};




export default reduxForm({
    // a unique name for the form
    form: 'signUp'
})( SignUpForm);

