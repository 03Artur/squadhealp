import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {submit, reset} from 'redux-form';
import TaskForm from "../../../../components/forms/createContestForms/TaskForm/TaskForm";
import {createTaskActionCreator,} from "../../../../actions/actionCreators/contestActionCreators/constestActionCreators";
import StartContestNav from "../../../../components/nav/StartContestNav/StartContestNav";
import {FORM_NAMES, TASK_TYPE,} from "../../../../constants";
import {
    nextContestCreationStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import _ from 'lodash';

function CreateTask(props) {

    const {
        steps,
        currentStepIndex,
        contestId,
        tasks,
        createTaskAction
    } = props;


    const submit = (values,dis,formProps) => {

            const {files, ...rest} = values;

            const formData = new FormData();
            if (files) {
                for (let file of files) {
                    formData.append("files", file);
                }
            } else {

                if (_.isEqual(values, formProps.initialValues)) {
                    return;
                }
            }
            formData.append('task', JSON.stringify(rest));
            createTaskAction(contestId, formData);
    };

    const submitSuccess = () => {
        reset(FORM_NAMES.TASKS_FORM);
        props.nextStepAction();
    };

    const getInitialValues = () => {
        const task = tasks.find(taskItem => taskItem.type === steps[currentStepIndex].initialValues.type);
        return  task ? _.pick(task, ['title', 'type', 'style']) : steps[currentStepIndex].initialValues;
    };

    return (
        <React.Fragment>
            <TaskForm initialValues={getInitialValues()} onSubmitSuccess={submitSuccess} onSubmit={submit}/>
            <StartContestNav onPrevClick={props.prevStepAction} onNextClick={props.submitFormAction}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {

    const {tasks} = state.contestCreation;
    const {steps, currentStepIndex,} = state.contestCreationSteps;
    const {contestId} = state.contestCreationQuery;
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


