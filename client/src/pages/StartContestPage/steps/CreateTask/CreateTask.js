import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {submit, reset} from 'redux-form';
import TasksForm from "../../../../components/forms/createContestForms/TaskForm/TaskForm";
import {createTaskActionCreator,} from "../../../../actions/actionCreators/contestActionCreators/constestActionCreators";
import StartContestNav from "../../../../components/nav/StartContestNav/StartContestNav";
import {FORM_NAMES,} from "../../../../constants";
import {
    nextContestCreationStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";


function CreateTask(props) {


    const submit = (values) => {
        const {files, ...task} = values;
        const formData = new FormData();
        formData.append("files", files);
        formData.append('task', JSON.stringify(task));
        console.log("task: ", task);
        props.createTaskAction(props.contestId, formData);
    };

    const submitSuccess = () => {
        props.nextStepAction();
        reset(FORM_NAMES.TASKS_FORM);
    };

    const getInitialValues = () => {
        const {type} = props.steps[props.currentStepIndex].initialValues;
        if (type) {
            const task = props.tasks.find(item => item.type === type);
            if (task)
                return task;
        }
        return {type};
    };

    return (
        <React.Fragment>
            <TasksForm onSubmitSuccess={submitSuccess} initialValues={getInitialValues()} onSubmit={submit}/>
            <StartContestNav onPrevClick={props.prevStepAction} onNextClick={props.submitFormAction}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {

    const {steps, currentStepIndex, query: {contestId}, tasks} = state.contestCreation;
    return {
        steps,
        currentStepIndex,
        contestId,
        tasks,
    }
};


const mapDispatchToProps = dispatch => ({
    createTaskAction: (contestId, taskFormData) => dispatch(createTaskActionCreator(contestId, taskFormData)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    submitFormAction: () => dispatch(submit(FORM_NAMES.TASKS_FORM)),
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);


