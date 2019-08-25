import React from 'react';
import {Field, FormSection, reduxForm} from 'redux-form';
import styles from './TaskForm.module.scss';
import LabelInput from "../../_components/inputs/LabelInput/LabelInput";
import InputFile from "../../_components/inputs/InputFile/InputFile";
import {connect} from 'react-redux';
import {FORM_NAMES, TASK_TYPE} from "../../../../constants";
import Select from "../ContestForm/Select/Select";

const stylesMap = new Map([
    [TASK_TYPE.NAME, [
        'Classic',
        'Fun',
        'Professional',
        'Descriptive',
        'Youthful',
        'Any',
    ]],
    [TASK_TYPE.LOGO, [
        'Techy',
        'Fun',
        'Fancy',
        'Minimal',
        'Brick & Mortar',
        'Photo-based',

    ]],
    [TASK_TYPE.TAGLINE, [
        'Classic',
        'Fun',
        'Powerful',
        'Descriptive',
        'Modern',
        'Any',
    ]],
]);

const TaskForm = (props) => {

    const {handleSubmit,} = props;

    return (
        <div className={styles.formContainer}>
            <form className={styles.container} onSubmit={handleSubmit} encType="multipart/form-data">
                <Field name="title" label={`Title of your ${props.initialValues.type} contest`}
                       placeholder="e.g. Need for Social Networking website"
                       component={LabelInput}/>
                <Field name="style"
                       options={stylesMap.get(props.initialValues.type)}
                       label={`Choose style of ${props.initialValues.type}`}
                       component={Select}/>
                <Field name="files" component={InputFile}/>
            </form>
        </div>
    )
};


export default reduxForm({
    form: FORM_NAMES.TASKS_FORM
})(TaskForm);


