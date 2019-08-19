/*
* REACT
* */
import React from 'react';
/*
* REACT, REACT-REDUX
* */
import {connect} from 'react-redux';
import {loginActionCreator, signUpActionCreator, modeActionCreator} from "../../actions/authorizationActionCreators";

/*
* COMPONENTS
* */
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import AuthorizationForm from '../../components/forms/AuthorizationForm/AuthorizationForm';
/*
* STYLES
* */
import styles from './AuthorizationPage.module.scss';
/*
* UTILS
* */
import {PATHS} from '../../constants'

let AuthorizationPage = ({isLoginMode, loginAction, signUpAction, ...props}) => {
    if ((props.location.pathname === PATHS.LOGIN && !isLoginMode) || (props.location.pathname === PATHS.SIGN_UP && isLoginMode)) {
        props.changeAuthorizationModeByLocation(props.location.pathname === PATHS.LOGIN);
    }


    let title = null;
    let documentTitle = null;
    let handleSubmit = null;

    if (props.isLoginMode) {
        documentTitle = 'Login';
        title = 'login to your account';
        handleSubmit = loginAction;
    } else {

        documentTitle = 'Sign up';
        title = "create an account";
        handleSubmit = signUpAction;
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

                <AuthorizationHeader/>

                <h1 className={titleClasses}>{title}</h1>
                <div className={styles.formRow}>
                    <AuthorizationForm onSubmit={handleSubmit}/>
                </div>
            </div>
            {
                logProps()
            }
        </div>
    );

}

const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(signUpActionCreator(data)),
    changeMode: (isLoginMode) => dispatch(modeActionCreator(isLoginMode))

});

const mapStateToProps = state => {
    const {isLoginMode} = state.authorizationModeReducer;
    return {isLoginMode};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);


