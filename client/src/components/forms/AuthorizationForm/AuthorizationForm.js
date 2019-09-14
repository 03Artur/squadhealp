import React, {useEffect} from 'react';
import ErrorInput from '../_components/inputs/ErrorInput/ErrorInput';
import InputRadio from '../_components/inputs/InputRadio/InputRadio';
import SubmitButton from '../_components/buttons/SubmitButton/SubmitButton';
import Spinner from '../../Spinner/Spinner';
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {loginActionCreator, signUpActionCreator} from "../../../actions/authorizationActionCreators";
import {AUTHORIZATION_MODES, ROLES} from '../../../constants';
import * as VALIDATION from '../../../utils/reduxForm/validateValue'
import styles from './AuthorizationForm.module.scss';
import {FORM_NAMES} from "../../../constants";


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
            case AUTHORIZATION_MODES.LOGIN_MODE:
                return props.loginAction;
            case AUTHORIZATION_MODES.SIGN_UP_MODE:
                return props.signUpAction;
            default:
                break;
        }
    };

    const renderSignUpFields = () => {
        return <React.Fragment>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>{
                    renderField('firstName', 'text', VALIDATION.nameValidation, ErrorInput, 'First name')
                }</div>
                <div className={styles.fieldCol}>{
                    renderField('lastName', 'text', VALIDATION.nameValidation, ErrorInput, 'Last name')
                }</div>
            </div>
            <div className={styles.fieldRow}>{
                renderField('email', 'email', VALIDATION.emailValidation, ErrorInput, 'Email Address')
            }</div>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>                    {
                    renderField('password', 'password', VALIDATION.passwordValidation, ErrorInput, 'Password')
                }</div>
                <div className={styles.fieldCol}>       {
                    renderField('passwordConfirmation', 'password', VALIDATION.confirmPasswordValidation, ErrorInput, 'Password Confirmation')
                }</div>
            </div>
            <div className={styles.fieldRow}>
                <Field id='radioBuyer' name='role' component={InputRadio} type='radio' value={ROLES.BUYER}
                       title="Join As a Buyer"/>
            </div>
            <div className={styles.fieldRow}>
                <Field id='radioCreative' name='role' component={InputRadio} type='radio' value={ROLES.CREATIVE}
                       title="Join As a Creative"/>
            </div>
        </React.Fragment>
    };

    const renderLoginFields = () => {
        return (
            <div className={styles.fieldRow}>
                <div className={styles.col}>{
                    renderField('email', 'email', VALIDATION.emailValidation, ErrorInput, 'Email Address')
                }</div>
                <div className={styles.col}>{
                    renderField('password', 'password', VALIDATION.passwordValidation, ErrorInput, 'Password')
                }</div>
            </div>
        )
    };

    const renderFields = () => {
        switch (props.mode) {
            case AUTHORIZATION_MODES.LOGIN_MODE:
                return renderLoginFields();
            case AUTHORIZATION_MODES.SIGN_UP_MODE:
                return renderSignUpFields();
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
    const {mode, form} = state.authorizationMode;
    return {isFetching, mode, ...form};
};
const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(signUpActionCreator(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
            // a unique name for the form
            form: FORM_NAMES.AUTHORIZATION_FORM,
            enableReinitialize: true,
        }
    )(AuthorizationForm)
);


