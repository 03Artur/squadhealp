/*
* REACT
* */
import React from 'react';
import PropTypes from 'prop-types';
/*
* REACT, REACT-REDUX
* */
import {connect} from 'react-redux';
import {loginActionCreator, singUpActionCreator} from '../../actions/authorizationActionCreators';
/*
* COMPONENTS
* */
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import LoginForm from './../../components/form/LoginForm/LoginForm';
import SingUpForm from './../../components/form/SingUpForm/SignUpForm';
/*
* STYLES
* */
import styles from './AuthorizationPage.module.scss';
/*
* UTILS
* */
import {AUTHORIZATION_MODE} from '../../constants'

const AuthorizationPage = ({mode, loginAction, signUpAction, ...props}) => {
    /*
    * Mode dependent values
    * */
    let FormComponent = null;
    let title = null;
    let documentTitle = null;
    let onSubmit = null;

    /*
    * Combining multiple styles classes
    * */
    const titleClasses = [styles.title, styles.titleField].join(' ');
    /*
    * set values
    * */
    switch (mode) {
        case AUTHORIZATION_MODE.LOGIN_MODE: {
            FormComponent = LoginForm;
            documentTitle = 'Login';
            onSubmit = loginAction;
            title = 'login to your account';
        }
            break;
        case AUTHORIZATION_MODE.SIGN_UP_MODE: {
            FormComponent = SingUpForm;
            documentTitle = 'Sign up';
            onSubmit = signUpAction;
            title = "create an account";
        }
            break;
        default:
            FormComponent = (props) => <form onSubmit={props.onSubmit}/>
            documentTitle = 'Authorization';
            onSubmit = () => {
            };
            title = "Authorization";
            break
    }

    const logProps = () => {
        console.log(props);
        if (props.user) {
            props.history.push('/');
        }
    }

    return (
        <div className={styles.page}>
            <DocumentTitle title={documentTitle}/>
            <div className={styles.myContainer}>
                <AuthorizationHeader mode={mode}/>
                <h1 className={titleClasses}>{title}</h1>
                <div className={styles.formRow}>
                    <FormComponent  onSubmit={onSubmit}/>
                </div>
            </div>
            {
                logProps()
            }
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
