/*
* REACT
* */
import React, {useEffect, useState} from 'react';

/*
* REACT, REACT-REDUX
* */
import {connect} from 'react-redux';
import {
    changeModeToLoginActionCreator,
    changeModeToSignUpActionCreator,
    coverErrorActionCreator,
} from "../../actions/authorizationActionCreators";

/*
* COMPONENTS
* */
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import AuthorizationForm from '../../components/Form/AuthorizationForm';
import Error from "../../components/notifications/Error/Error";
/*
* STYLES
* */
import styles from './AuthorizationPage.module.scss';

/*
* UTILS
* */
import {AUTHORIZATION_MODE, PATH, ROLE} from '../../constants';

const AuthorizationPage = (props) => {


    useEffect(() => {
        if (props.user) {
            props.history.push(PATH.HOME);
        }
    }, [props.user]);

    useEffect(() => {
        changeAuthorizationModeByLocation()
    }, [props.location.pathname]);

    const changeAuthorizationModeByLocation = () => {
        if (props.location.pathname === PATH.SIGN_UP && props.mode !== AUTHORIZATION_MODE.SIGN_UP_MODE) {
            props.changeModeToSignUpAction();
        } else if (props.location.pathname === PATH.LOGIN && props.mode !== AUTHORIZATION_MODE.LOGIN_MODE) {
            props.changeModeToLoginAction();
        }
    };

    const [isShowError, setIsShowError] = useState(true);

    const coverError = () => {
        if (isShowError)
            setIsShowError(false);
    };
    const renderError = () => {
        if (isShowError && props.error) {
            return (
                <div className={styles.errorContainer}>
                    <Error onClick={coverError} message={props.error.message}/>
                </div>
            )
        }
    };

    const titleClasses = [styles.title, styles.titleField].join(' ');

    return (
        <div className={styles.page}>
            <DocumentTitle title={props.documentTitle}/>
            {
                renderError()
            }
            <div className={styles.myContainer}>
                <AuthorizationHeader/>
                <h1 className={titleClasses}>{props.pageTitle}</h1>
                <div className={styles.formRow}>
                    <AuthorizationForm/>
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = store => {

    const {page, mode} = store.authorizationMode;
    return {...store.authorization, mode, ...page};
};

const mapDispatchToProps = (dispatch) => ({
    changeModeToLoginAction: () => dispatch(changeModeToLoginActionCreator()),
    changeModeToSignUpAction: () => dispatch(changeModeToSignUpActionCreator()),

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
