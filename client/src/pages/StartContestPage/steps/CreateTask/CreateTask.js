import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {submit} from 'redux-form';
import TaskForm from "../../../../components/forms/TaskForm/TaskForm";
import {
    createTaskActionCreator, doneCurrentStepActionCreator,
    nextCreateContestStepActionCreator, prevCreateContestStepActionCreate, setCurrentStepActionCreate
} from "../../../../actions/contest/constestActionCreators";
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {FORM_NAMES} from "../../../../constants";


function CreateTask({type, contest, tasks, selectedTypes, nextStepAction, prevStepAction, setCurrentStepAction, ...props}) {


    const handleSubmit = (values) => {
        const formData = new FormData();
        values.contestId = contest.id;
        console.log(values);
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
    doneStepAction: () => dispatch(doneCurrentStepActionCreator()),
    submitTaskForm: () => dispatch(submit(FORM_NAMES.TASK_FORM))


});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);

