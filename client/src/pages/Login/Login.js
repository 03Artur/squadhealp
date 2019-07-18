import React from 'react';
import DocumentTitle from 'react-document-title';
import LoginForm from './../../components/form/LoginForm/LoginForm'


function Login(props) {

    const submit = values => {
        console.log(values);
    };

    return (
        <DocumentTitle title="Login">
            <h1>Login Page</h1>

            <LoginForm onSubmit={submit}/>

        </DocumentTitle>
    );

}

export default Login;