/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
/*
* Components
* */


/*
* styles
* */
import styles from './TaskForm.module.scss';
import ContestForm from "../ContestForm/ContestForm";
import StartContestNav from "../../navigations/StartContestNav/StartContestNav";
import {prevCreateContestStepActionCreate} from "../../../actions/contest/constestActionCreators";
import LabelInput from "../_components/inputs/LabelInput/LabelInput";
import InputFile from "../_components/inputs/InputFile/InputFile";

/*
* UTILS
* */


const TaskForm = ({handleSubmit, ...props}) => {


    return (
        <form onSubmit={handleSubmit}>
            <Field validate ={[]} name="title" label ="Title of your contest" placeholder="e.g. Need for Social Networking website" component = {LabelInput}/>
            <Field name="style" component = {LabelInput}/>
            <Field name="files" component = {InputFile}/>
        </form>
    )
};

TaskForm.propTypes = {};

TaskForm.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {isNameExist} = store.createContest;
    return {isNameExist}
};
const mapDispatchToProps = dispatch => ({
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate())
});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: 'taskForm',
    })(TaskForm)

)
