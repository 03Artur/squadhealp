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

    const {handleSubmit, types, tasks} = props;

    const renderFormSection = (taskType) => {
        return (
            <FormSection key={taskType} name={taskType}>
                <Field name="title" label="Title of your contest" placeholder="e.g. Need for Social Networking website"
                       component={LabelInput}/>
                <Field name="style"
                       options={stylesMap.get(taskType)}
                       label={`Choose style of ${taskType}`}
                       component={Select}/>
                <Field name="files" component={InputFile}/>
            </FormSection>
        );
    };

    const renderFormSections = () => {
        return types.map(taskType => renderFormSection(taskType))
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.container} onSubmit={handleSubmit}>{
                renderFormSections()
            }</form>
        </div>
    )
};

const mapStateToProps = state => {

    const {query: {types}, tasks} = state.contestCreation;

    return {
        types,
    }
};

export default connect(mapStateToProps)(reduxForm({
    form: FORM_NAMES.TASKS_FORM
})(TaskForm));


