import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import TaskForm from "../../../../components/forms/TaskForm/TaskForm";
import {
    createTaskActionCreator,
    nextCreateContestStepActionCreate, prevCreateContestStepActionCreate, setCurrentStepActionCreate
} from "../../../../actions/contest/constestActionCreators";
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";


function CreateTask({type, contest, tasks, selectedTypes, nextStepAction, createTask, prevStepAction, setCurrentStepAction, ...props}) {


    useEffect(() => {
        if (tasks.length === selectedTypes.length) {
            nextStepAction()
        }/* else if () {

            setCurrentStepAction()
        }*/
    }, [tasks.length]);

    const submit = (values) => {
        values.contestId = contest.id;
        createTask(values);
    };


    return (
        <React.Fragment>
            <TaskForm onSubmit={submit}/>
            <StartContestNav onPrevClick={prevStepAction} onNextClick={submit}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {

    const {contest, tasks} = state.createContest;
    const {selectedTypes} = state.selectedTaskTypes;
    return {
        contest,
        selectedTypes,
        tasks
    }
};


const mapDispatchToProps = dispatch => ({
    createTask: task => dispatch(createTaskActionCreator(task)),
    nextStepAction: () => dispatch(nextCreateContestStepActionCreate()),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    setCurrentStepAction: () => dispatch(setCurrentStepActionCreate()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);


