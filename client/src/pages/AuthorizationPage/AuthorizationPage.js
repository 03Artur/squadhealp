/*
* REACT
* */
import React from 'react';
/*
* REACT, REACT-REDUX
* */
import {connect} from 'react-redux';
import {loginActionCreator, singUpActionCreator, modeActionCreator} from "../../actions/authorizationActionCreators";

/*
* COMPONENTS
* */
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import LoginForm from '../../components/Form/LoginForm';
import SignUpForm from '../../components/Form/SignUpForm';
/*
* STYLES
* */
import styles from './AuthorizationPage.module.scss';
/*
* UTILS
* */
import PATHS from '../../constants/paths'

let AuthorizationPage = ({isLoginMode, loginAction, signUpAction, ...props}) => {
    if ((props.location.pathname === PATHS.LOGIN && !isLoginMode) || (props.location.pathname === PATHS.SIGN_UP && isLoginMode)) {
        console.log("AuthorizationPage");
        props.changeMode(props.location.pathname === PATHS.LOGIN);
    }


    let title = null;
    let documentTitle = null;
    let handleSubmit = null;
    let AuthorizationForm = null
    if (isLoginMode) {
        documentTitle = 'Login';
        title = 'login to your account';
        handleSubmit = loginAction;
        AuthorizationForm = LoginForm;
    } else {

        documentTitle = 'Sign up';
        title = "create an account";
        handleSubmit = signUpAction;
        AuthorizationForm = SignUpForm;
    }

    const logProps = () => {
        if (props.user) {
            props.history.push('/');
        }
    };


    const titleClasses = [styles.title, styles.titleField].join(' ');
    return (
        <div className={styles.page}>
            <DocumentTitle title={documentTitle}/>
            <div className={styles.myContainer}>

                <AuthorizationHeader isLoginMode={isLoginMode}/>

                <h1 className={titleClasses}>{title}</h1>
                <div className={styles.formRow}>
                    <AuthorizationForm isLoginMode={isLoginMode} onSubmit={handleSubmit}/>
                </div>
            </div>
            {
                logProps()
            }
        </div>
    );

};

const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(singUpActionCreator(data)),

});

const mapStateToProps = state => {
    const {user, error, isFetching} = state.authorizationReducer;
    return {user, error, isFetching};
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
