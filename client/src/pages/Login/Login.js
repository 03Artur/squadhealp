import React from 'react';
import DocumentTitle from 'react-document-title';
import LoginForm from './../../components/form/LoginForm/LoginForm'


const Login = (props) => {

    const submit = values => {
        console.log(values);
    };

    return (
        //<DocumentTitle title="Login">
        <div>
            <h1>Login Page</h1>

            <LoginForm handleSubmit={submit}/>
        </div>
        //</DocumentTitle>
    );

}

export default Login;