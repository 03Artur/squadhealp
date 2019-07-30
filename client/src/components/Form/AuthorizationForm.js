//REACT
import React from 'react';
//COMPONENTS
import Input from './inputs/Input/Input';
import InputRadio from './inputs/InputRadio/InputRadio';
import SubmitButton from './buttons/SubmitButton/SubmitButton';
import Spinner from '../Spinner/Spinner';
//REDUX & FRIENDS
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {loginActionCreator, signUpActionCreator} from "../../actions/authorizationActionCreators";

//UTILS
import {AUTHORIZATION_MODE, ROLE} from '../../constants/index';
import * as VALIDATION from '../../utils/reduxFormValuesValidations'
//STYLES
import styles from './AuthorizationForm.module.scss';
/*
import Error from "../notification/Error/Error";
*/

function AuthorizationForm(props) {
    const renderField = (name, type, validate, component, placeholder, value = '') => {
        return (
            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate} value={value}/>
            </div>
        )
    };

    const onSubmit = () => {
        switch (props.mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                return props.loginAction;
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                return props.signUpAction;
            default:
                break;
        }
    };

    const renderSignUp = () => {
        return <React.Fragment>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>{
                    renderField('firstName', 'text', VALIDATION.nameValidation, Input, 'First name')
                }</div>
                <div className={styles.fieldCol}>{
                    renderField('lastName', 'text', VALIDATION.nameValidation, Input, 'Last name')
                }</div>
            </div>
            <div className={styles.fieldRow}>{
                renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
            }</div>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>                    {
                    renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
                <div className={styles.fieldCol}>       {
                    renderField('passwordConfirmation', 'password', VALIDATION.confirmPasswordValidation, Input, 'Password Confirmation')
                }</div>
            </div>
            <div className={styles.fieldRow}>
                <Field id='radioBuyer' name='role' component={InputRadio} type='radio' value={ROLE.BUYER}
                       title="Join As a Buyer"/>
            </div>
            <div className={styles.fieldRow}>
                <Field id='radioCreative' name='role' component={InputRadio} type='radio' value={ROLE.CREATIVE}
                       title="Join As a Creative"/>
            </div>
        </React.Fragment>
    };

    const renderLogin = () => {
        return (
            <div className={styles.fieldRow}>
                <div className={styles.col}>{
                    renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
                }</div>
                <div className={styles.col}>{
                    renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
            </div>
        )
    };

    const renderFields = () => {
        switch (props.mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                return renderLogin();
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                return renderSignUp();
            default:
                break;
        }
    };



    const renderButtonContent = () => {
        if (props.isFetching) {
            return (
                <div className={styles.spinnerContainer}>
                    <Spinner/>
                </div>
            )
        } else {
            return props.submitButtonText
        }
    };

    return (
        <div className={styles.formContainer}>
            {
                renderFields()
            }
            <div className={styles.fieldRow}>
                <div className={styles.col}>
                    <div className={styles.fieldContainer}>
                        <SubmitButton isEnable={!props.isFetching} onClick={props.handleSubmit(onSubmit())}>{
                            renderButtonContent()
                        }</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const {isFetching} = state.authorizationReducer;
    const {mode, form} = state.authorizationModeReducer;
    return {isFetching, mode, ...form};
};
const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(signUpActionCreator(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        // a unique name for the form
        form: 'AuthorizationForm',
        enableReinitialize: true,
    })(AuthorizationForm));


