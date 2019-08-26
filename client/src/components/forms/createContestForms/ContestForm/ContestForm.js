import React, {Component, Fragment} from 'react';


import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import LabelInput from '../../_components/inputs/LabelInput/LabelInput'

import styles from './ContestForm.module.scss';
import Select from "./Select/Select";
import {NAME_TYPE, TASK_TYPE} from "../../../../constants";

import {FORM_NAMES} from "../../../../constants";
import {
    isRequired,
    maxLength,
    notEmpty, notEmptySpaceOnly,
    notEmptyStringValidation,
    oneOf
} from "../../../../utils/reduxForm/validateValue";

let ContestForm = ({handleSubmit, ...props}) => {



    const renderNamesFields = () => {
        if (props.types && !props.types.includes(TASK_TYPE.NAME)) {
            return (
                <Fragment>
                    <Field validate={[isRequired,notEmpty,]} name="name"
                           placeholder={"e.g. Marketing Platform for Small Businesses"}
                           label='Name of the company / business?'
                           component={LabelInput} type="text"/>
                    <Field validate={[isRequired,notEmpty, ]} name="type"
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
                <Field validate={[isRequired,notEmpty, ]} name="typeOfIndustry"
                       placeholder={"Input Your Industry"}
                       label='Type of Industry'
                       component={LabelInput} type="text"/>
                <Field validate={[isRequired,notEmpty,]} name="targetCustomers"
                       placeholder={"i.e. designers, developers"}
                       label='Who are your target customers?'
                       component={LabelInput} type="text"/>
                <Field validate={[isRequired,notEmpty,]} name="description"
                       placeholder={"e.g. Smith & Forest"}
                       label='What does your company or business do?'
                       component={LabelInput} type="textarea"/>
            </Fragment>
        )
    };

    return (
        <form className={styles.fieldContainer} onSubmit={handleSubmit} encType={"multipart/form-data"}>
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
    const {types} = store.contestCreationQuery;
    return {types};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: FORM_NAMES.CONTEST_FORM
    })(ContestForm)
)
