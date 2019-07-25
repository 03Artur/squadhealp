//REACT
import React from 'react';
//COMPONENTS
import Input from './inputs/Input/Input';
import InputRadio from './inputs/InputRadio/InputRadio';
import SubmitButton from './buttons/SubmitButton/SubmitButton';
import Spinner from '../Spinner/Spinner'
//REDUX & FRIENDS
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {loginActionCreator, signUpActionCreator, modeActionCreator} from "../../actions/authorizationActionCreators";

//UTILS
import {AUTHORIZATION_MODE, ROLE} from '../../constants/index';
import * as VALIDATION from '../../utils/reduxFormValuesValidations'
//STYLES
import styles from './AuthorizationForm.module.scss';

class Test extends React.Component {

    renderField = (name, type, validate, component, placeholder, value = '') => {
        return (
            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate} value={value}/>
            </div>
        )
    };

    onSubmit = (values) => {
        switch (mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                loginAction(values);
                break;
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                signUpAction(values);
                break;
        }

    };

    renderSignUp = () => {
        return <React.Fragment>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>{
                    this.renderField('firstName', 'text', VALIDATION.nameValidation, Input, 'First name')
                }</div>
                <div className={styles.fieldCol}>{
                    this.renderField('lastName', 'text', VALIDATION.nameValidation, Input, 'Last name')
                }</div>
            </div>
            <div className={styles.fieldRow}>{
                this.renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
            }</div>
            <div className={styles.fieldRow}>
                <div className={styles.fieldCol}>                    {
                    this.renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
                <div className={styles.fieldCol}>       {
                    this.renderField('passwordConfirmation', 'password', VALIDATION.confirmPasswordValidation, Input, 'Password Confirmation')
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

    renderLogin = () => {
        return <React.Fragment>
            <div className={styles.fieldRow}>
                <div className={styles.col}>{
                    this.renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
                }</div>
                <div className={styles.col}>{
                    this.renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
            </div>

        </React.Fragment>

    };
    renderFields = () => {
        switch (this.props.mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                return this.renderLogin();
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                return this.renderSignUp();
        }
    };

    render() {
        return (
            <div className={styles.formContainer}>
                {
                    this.renderFields()
                }
                <div className={styles.fieldRow}>
                    <div className={styles.col}>
                        <div className={styles.fieldContainer}>
                            <SubmitButton onClick={this.props.handleSubmit(values =>this.onSubmit(values))}>{
                                props.submitButtonText
                            }</SubmitButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let AuthorizationForm = ({handleSubmit, mode, loginAction, signUpAction, ...props}) => {

    const renderField = (name, type, validate, component, placeholder, value = '') => {
        return (
            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate} value={value}/>
            </div>
        )
    };

    const onSubmit = (values) => {
        switch (mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                loginAction(values);
                break;
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                signUpAction(values);
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
        return <React.Fragment>
            <div className={styles.fieldRow}>
                <div className={styles.col}>{
                    renderField('email', 'email', VALIDATION.emailValidation, Input, 'Email Address')
                }</div>
                <div className={styles.col}>{
                    renderField('password', 'password', VALIDATION.passwordValidation, Input, 'Password')
                }</div>
            </div>

        </React.Fragment>

    };
    const renderFields = () => {
        switch (mode) {
            case AUTHORIZATION_MODE.LOGIN_MODE:
                return renderLogin();
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                return renderSignUp();
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
                        <SubmitButton onClick={handleSubmit(values => onSubmit(values))}>{
                            props.submitButtonText
                        }</SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    const {user, error, isFetching} = state.authorizationReducer;
    const {mode, form} = state.authorizationModeReducer
    return {user, error, isFetching, mode, ...form};
};
const mapDispatchToProps = (dispatch) => ({

    loginAction: (data) => dispatch(loginActionCreator(data)),
    signUpAction: (data) => dispatch(signUpActionCreator(data)),

});

AuthorizationForm = connect(mapStateToProps, mapDispatchToProps)(AuthorizationForm);

AuthorizationForm = reduxForm({
    // a unique name for the form
    form: 'AuthorizationForm',
    initialValues: {role: ROLE.BUYER}
})(AuthorizationForm);

export default AuthorizationForm


