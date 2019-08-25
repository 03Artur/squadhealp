import React, {Component, Fragment} from 'react';


import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import LabelInput from '../../_components/inputs/LabelInput/LabelInput'

import styles from './ContestForm.module.scss';
import Select from "./Select/Select";
import {NAME_TYPE, TASK_TYPE} from "../../../../constants";

import {FORM_NAMES} from "../../../../constants";
import {notEmptyStringValidation} from "../../../../utils/reduxForm/validateValue";

let ContestForm = ({handleSubmit, ...props}) => {

    const renderNamesFields = () => {
        if (props.types && !props.types.includes(TASK_TYPE.NAME)) {
            return (
                <Fragment>
                    <Field validate={[notEmptyStringValidation]} name="name" placeholder={"e.g. Marketing Platform for Small Businesses"}
                           label='Name of the company / business?'
                           component={LabelInput} type="text"/>
                    <Field validate={[notEmptyStringValidation]} name="type"
                           options={Object.values(NAME_TYPE)} label={"Type of business"}
                           component={Select}
                           type="text"/>
                </Fragment>
            )
        }
    };

    const renderFields = () => {
        return (
            <Fragment>
                <Field validate={[notEmptyStringValidation]} name="typeOfIndustry" placeholder={"Input Your Industry"} label='Type of Industry'
                       component={LabelInput} type="text"/>
                <Field validate={[notEmptyStringValidation]} name="targetCustomers" placeholder={"i.e. designers, developers"}
                       label='Who are your target customers?'
                       component={LabelInput} type="text"/>
                <Field validate={[notEmptyStringValidation]} name="description" placeholder={"e.g. Smith & Forest"}
                       label='What does your company or business do?'
                       component={LabelInput} type="text"/>
            </Fragment>
        )
    };

    return (
            <form  className={styles.fieldContainer} onSubmit={handleSubmit} encType={"multipart/form-data"}>
                {
                    renderNamesFields()
                }
                {
                    renderFields()
                }
            </form>
    )
};

const mapStateToProps = store => {
    const {query: {types}} = store.contestCreation;
    return {types};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: FORM_NAMES.CONTEST_FORM
    })(ContestForm)
)
