/*
* REACT
* */
import React from 'react';
/*
* REACT, REACT-REDUX
* */
import {connect} from 'react-redux';
/*
* COMPONENTS
* */
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import AuthorizationForm from '../../components/Form/AuthorizationForm';
/*
* STYLES
* */
import styles from './AuthorizationPage.module.scss';
import {loginActionCreator, singUpActionCreator} from "../../actions/authorizationActionCreators";


const AuthorizationPage = ({mode, loginAction, signUpAction, ...props}) => {
        /*
        * Mode dependent values
        * */
        let title = null;
        let documentTitle = null;
        let handleSubmit =null;
        /*
        * Combining multiple styles classes
        * */
        const titleClasses = [styles.title, styles.titleField].join(' ');
        /*
        * set values
        * */
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
        const changeMode = () => {
            props.changeModeAction(false)
        };

        return (
            <div className={styles.page}>
                <DocumentTitle title={documentTitle}/>
                <div className={styles.myContainer}>
                    <AuthorizationHeader changeMode={changeMode} isLoginMode={props.isLoginMode}/>
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
;

const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(singUpActionCreator(data)),

});

const mapStateToProps = state => {
    const {isLoginMode} = state.authorizationModeReducer;
    return {isLoginMode};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
