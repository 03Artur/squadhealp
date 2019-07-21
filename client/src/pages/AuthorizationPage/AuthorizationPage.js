import React from 'react';
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import LoginForm from './../../components/form/LoginForm/LoginForm';
import SingUpForm from './../../components/form/SingUpForm/SignUpForm';
import {loginActionCreator, singUpActionCreator} from '../../actions/authorizationActionCreators';
import {connect} from 'react-redux';
import styles from './AuthorizationPage.module.sass';
import PropTypes from 'prop-types';
import {AUTHORIZATION_MODE} from '../../constants'


const AuthorizationPage = ({mode, ...props}) => {


    const logIt = () => {
        console.group('AuthorizationPage');
        console.log(props);
        console.groupEnd();
    };



    const renderForm = () => {
        switch (mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                return <LoginForm onSubmit={props.loginAction}/>;
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                return <SingUpForm onSubmit={props.signUpAction}/>;
        }
    };


    return (

        <div className={styles.page}>
            <DocumentTitle title='Authorization'/>
            <div className={styles.myContainer}>
            <AuthorizationHeader mode={mode}/>
            <h1>Login Page</h1>
            {
                renderForm()
            }
            {
                logIt()
            }
            </div>
        </div>
    );

};

AuthorizationPage.propTypes = {
    mode: PropTypes.oneOf(Object.values(AUTHORIZATION_MODE)),
};


const mapStateToProps = state => {
    const {user, isFetching, error} = state.authorizationReducer;
    return {user, isFetching, error};
};


const mapDispatchToProps = (dispatch) => ({

    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(singUpActionCreator(data)),


});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
