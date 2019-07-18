import React from 'react';
import {Field, reduxForm} from 'redux-form';


let LoginForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='userEmail'>Email:</label>
                <Field name='userEmail' component='input' type='text'/>
            </div>
            <div>
                <label htmlFor='userPassword'>Email:</label>
                <Field name='userPassword' component='input' type='text'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );

}


const createReduxForm = reduxForm({form: 'login'});

LoginForm = createReduxForm(LoginForm);


export default LoginForm;