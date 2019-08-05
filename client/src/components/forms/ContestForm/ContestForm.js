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
/*
* Components
* */
import Input from './Input/Input'

/*
* Styles
* */
import styles from './ContestForm.module.scss';
import Select from "./Select/Select";
import {NAME_TYPE, TASK_TYPE} from "../../../constants";

/*
* UTILS
* */


const ContestForm = ({handleSubmit, ...props}) => {

    const renderNamesFields = () => {
        if (!props.selectedTypes.includes(TASK_TYPE.NAME)) {
            return (
                <Fragment>
                    <Field name="name" placeholder={"e.g. Smith & Forest"} label='Name of the company/business?'
                           component={Input} type="text"/>
                    <Field name="type" options={Object.values(NAME_TYPE)} label={"Type of business"} component={Select}
                           type="text"/>
                </Fragment>
            )
        }
    };

    const renderFields = () => {
        return (
            <Fragment>
                <Field name="typeOfIndustry" placeholder={"e.g. Smith & Forest"} label='Name of the company/business?'
                       component={Input} type="text"/>
                <Field name="targetCustomers" placeholder={"e.g. Smith & Forest"} label='Name of the company/business?'
                       component={Input} type="text"/>
                <Field name="description" placeholder={"e.g. Smith & Forest"} label='Name of the company/business?'
                       component={Input} type="text"/>
            </Fragment>
        )
    };


    return (
        <form onSubmit={handleSubmit}>
            {
                renderNamesFields()
            }
            {
                renderFields()
            }
        </form>
    )
};

ContestForm.propTypes = {};

ContestForm.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {selectedTypes} = store.selectedTaskTypes;
    return {selectedTypes};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: "contestForm"
    })(ContestForm))
