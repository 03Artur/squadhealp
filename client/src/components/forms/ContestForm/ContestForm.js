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
import LabelInput from '../_components/inputs/LabelInput/LabelInput'

/*
* Styles
* */
import styles from './ContestForm.module.scss';
import Select from "./Select/Select";
import {NAME_TYPE, TASK_TYPE} from "../../../constants";
import StartContestNav from "../../navigations/StartContestNav/StartContestNav";

/*
* UTILS
* */


let ContestForm = ({handleSubmit, ...props}) => {

    const submit = (value) => {

    };

    const renderNamesFields = () => {

        if (props.selectedTypes && !props.selectedTypes.includes(TASK_TYPE.NAME)) {
            return (
                <Fragment>
                    <Field name="name" placeholder={"e.g. Marketing Platform for Small Businesses"}
                           label='Name of the company / business?'
                           component={LabelInput} type="text"/>
                    <Field name="type" options={Object.values(NAME_TYPE)} label={"Type of business"} component={Select}
                           type="text"/>
                </Fragment>
            )
        }
    };

    const renderFields = () => {
        return (
            <Fragment>
                <Field name="typeOfIndustry" placeholder={"Input Your Industry"} label='Type of Industry'
                       component={LabelInput} type="text"/>
                <Field name="targetCustomers" placeholder={"i.e. designers, developers"}
                       label='Who are your target customers?'
                       component={LabelInput} type="text"/>
                <Field name="description" placeholder={"e.g. Smith & Forest"}
                       label='What does your company or business do?'
                       component={LabelInput} type="text"/>
            </Fragment>

        )
    };


    return (

        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.container} encType={"multipart/form-data"}>
                {
                    renderNamesFields()
                }

                {
                    renderFields()
                }
            </form>
        </div>

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
        form: "testForm"
    })(ContestForm)
)
