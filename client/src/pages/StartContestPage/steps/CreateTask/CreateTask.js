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
import _ from 'lodash';

function CreateTask(props) {

    const {
        steps,
        currentStepIndex,
        contestId,
        tasks,
    } = props;

    const getTaskByType = (type) =>  tasks.find(taskItem => taskItem.type === type);

    const submit = (values) => {
            const {files, ...rest} = values;
            const formData = new FormData();
            if (files) {
                for (let file of files) {
                    formData.append("files", file);
                }
            } else {
                const task = getTaskByType(values.type);
                if (_.isEqual(values, _.pick(task, Object.keys(values)))) {
                    console.log("task & values equal");
                    return;
                }
            }
            formData.append('task', JSON.stringify(rest));

            props.createTaskAction(props.contestId, formData);


    };

    const submitSuccess = () => {
        props.nextStepAction();
        reset(FORM_NAMES.TASKS_FORM);
    };

    const getInitialValues = () => {

        const task = getTaskByType(steps[currentStepIndex].initialValues.type);
        const init= task ? _.omit(task, ['files']) : steps[currentStepIndex].initialValues;
        console.log(init);
        return init;
    };

    return (
        <React.Fragment>
            <TasksForm onSubmitSuccess={submitSuccess} initialValues={getInitialValues()} onSubmit={submit}/>
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


