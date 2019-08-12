import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {submit} from 'redux-form';
import TaskForm from "../../../../components/forms/createContestForms/TaskForm/TaskForm";
import {
    createTaskActionCreator, doneCurrentStepActionCreator,
    nextCreateContestStepActionCreator, prevCreateContestStepActionCreate, setCurrentStepActionCreate
} from "../../../../actions/contest/constestActionCreators";
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {FORM_NAMES} from "../../../../constants";


function CreateTask({type, contest, tasks, selectedTypes, nextStepAction, prevStepAction, setCurrentStepAction, ...props}) {


    const handleSubmit = (values) => {
        console.group("Create task submit: ");
        console.log(values);
        console.groupEnd();
        return;
        props.createTaskAction(values);
    };

    return (
        <React.Fragment>
            <TaskForm onSubmitSuccess={props.doneStepAction} onSubmit={handleSubmit}/>
            <StartContestNav onPrevClick={prevStepAction} onNextClick={props.submitTaskForm}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {

    const {contest, tasks} = state.createContest;
    const {selectedTypes} = state.createContestTaskTypes;
    return {
        contest,
        selectedTypes,
        tasks
    }
};


const mapDispatchToProps = dispatch => ({
    createTaskAction: (task) => dispatch(createTaskActionCreator(task)),
    nextStepAction: () => dispatch(nextCreateContestStepActionCreator()),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    submitTaskForm: () => dispatch(submit(FORM_NAMES.TASK_FORM))


});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);


