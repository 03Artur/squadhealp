/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import Spinner from '../../Spinner/Spinner';
//REDUX & FRIENDS
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {loginActionCreator, signUpActionCreator} from "../../../actions/authorizationActionCreators";
/*
* Components
* */


/*
* tyles
* */
import styles from './ContestForm.module.scss';

/*
* UTILS
* */


const ContestForm = (props) => {

    const renderField = (name, type, validate, component, placeholder, value = '') => {
        return (
            <div className={styles.fieldContainer}>
                <Field name={name} component={component} placeholder={placeholder} type={type}
                       validate={validate} value={value}/>
            </div>
        )
    };
    const renderNamesFields = () => {
        if (props.isNameExist) {
            return (
                <Fragment>
                    {
                        renderField()
                    }
                </Fragment>
            )
        }
    }
    const renderFields = () => {
        return (
            <Fragment>
                {
                    renderField()
                }
                {
                    renderField()
                }
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Field/>
        </Fragment>
    )
};

ContestForm.propTypes = {};

ContestForm.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {isNameExist} = store.createContest;
    return {isNameExist};
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: "contestForm"
    })(ContestForm))
