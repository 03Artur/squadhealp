import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    changeModeToLoginActionCreator,
    changeModeToSignUpActionCreator,
} from "../../actions/authorizationActionCreators";
import DocumentTitle from 'react-document-title';
import AuthorizationHeader from '../../components/headers/AuthorizationHeader/AuthorizationHeader'
import AuthorizationForm from '../../components/forms/AuthorizationForm/AuthorizationForm';
import styles from './AuthorizationPage.module.scss';
import {AUTHORIZATION_MODES, PATHS} from '../../constants';
import classNames from 'classnames';
import {useAlert} from 'react-alert';

const AuthorizationPage = (props) => {

    const {error, user, history} = props;
    const alert = useAlert();

    useEffect(() => {

        if (error) {
            alert.error(`${error.status} ${error.message}`)
        }

    }, [error]);


    useEffect(() => {
        if (user) {
            history.push(PATHS.HOME);
        }
    }, [props.user]);

    useEffect(() => {
        changeAuthorizationModeByLocation()
    }, [history.location.pathname]);

    const changeAuthorizationModeByLocation = () => {
        if (history.location.pathname === PATHS.SIGN_UP && props.mode !== AUTHORIZATION_MODES.SIGN_UP_MODE) {
            props.changeModeToSignUpAction();
        } else if (history.location.pathname === PATHS.LOGIN && props.mode !== AUTHORIZATION_MODES.LOGIN_MODE) {
            props.changeModeToLoginAction();
        }
    };

    const titleClasses = classNames(styles.title, styles.titleField);

    return (
        <div className={styles.page}>
            <DocumentTitle title={props.documentTitle}/>
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

const mapStateToProps = state => {

    const {page, mode} = state.authorizationMode;
    return {...state.authorizationReducer, mode, ...page};
};

const mapDispatchToProps = (dispatch) => ({
    changeModeToLoginAction: () => dispatch(changeModeToLoginActionCreator()),
    changeModeToSignUpAction: () => dispatch(changeModeToSignUpActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage);
