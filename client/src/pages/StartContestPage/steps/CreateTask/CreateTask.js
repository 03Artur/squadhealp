import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {submit} from 'redux-form';
import TasksForm from "../../../../components/forms/createContestForms/TaskForm/TaskForm";
import {createTaskActionCreator,} from "../../../../actions/actionCreators/contestActionCreators/constestActionCreators";
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {FORM_NAMES, TASK_TYPE} from "../../../../constants";
import {prevCreateContestStepActionCreate} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";


function CreateTask(props) {

    const submit = (values) => {
        const tmp = Object.values(values);
        const files tmp.reduce(
            (result,item)=>{
            const {files,...task}=item;
            return {
                files: [
                    ...result.files,
                    ...files,
                ],
                tasks: [
                    ...result.tasks,
                    task
                ]
            }
            },{files:null,tasks:null});
        const formData = new FormData();
        /*formData.append("files", files);
        formData.append('tasks', JSON.stringify(tasks));
        props.createTaskAction(formData);*/
    };


    const getInitialValues = () => {

        return props.types.reduce((result, taskType) => {

            result[taskType] = props.tasks.find(task => task.type === taskType);

            return result
        }, {});

    };
    return (
        <React.Fragment>
            <TasksForm initialValues={getInitialValues()} onSubmit={submit}/>
            <StartContestNav onPrevClick={props.prevStepAction} onNextClick={props.submitFormAction}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {

    const {steps, currentStepIndex, query: {types}, tasks} = state.contestCreation;
    return {
        types,
        tasks,
    }
};


const mapDispatchToProps = dispatch => ({
    createTaskAction: (contestId, taskFormData) => dispatch(createTaskActionCreator(contestId, taskFormData)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    submitFormAction: () => dispatch(submit(FORM_NAMES.TASKS_FORM)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);


