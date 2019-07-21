import React from 'react';
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import LoginForm from './../../components/form/LoginForm/LoginForm'
import {loginActionCreator, singUpActionCreator} from '../../actions/authorizationActionCreators';
import {connect} from 'react-redux';
import styles from './Login.module.sass';


const Login = (props) => {

    const {loginAction} = props;
    const submit = values => {
        console.log(">>>>>>>>>>>>>>>",values);
        loginAction(values)

    };
    const logIt = () => {
        console.group('Login');
        console.log(props);
        console.groupEnd();
    };
    return (

        <div className={styles.page}>

            <DocumentTitle title="Login"/>
            <AuthorizationHeader />
            <h1>Login Page</h1>

            <LoginForm onSubmit={submit}/>
            {
                logIt()
            }
        </div>
    );

}

const mapStateToProps = state => {
    const {user, isFetching, error} = state.authorizationReducer;
    return {user, isFetching, error};
};



const mapDispatchToProps = (dispatch) => ({

    loginAction: (data) => dispatch(loginActionCreator(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
