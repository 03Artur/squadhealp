import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import {
    createContestSetQueryStringCreator,
    doneCurrentStepActionCreator, nextCreateContestStepActionCreator,
    removeSelectedTypesActionCreator, setCreateTaskStepsActionCreator,
    setSelectedTypesActionCreator
} from "../../../../actions/contest/constestActionCreators";
import TaskTypeForm from "../../../../components/forms/TaskTypeForm/TaskTypeForm";
import {CREATE_CONTEST_STEP_INFO, CREATE_CONTEST_STEPS} from "../../../../constants/createContestConstants";


const SelectTaskTypes = ({typesCombinations, steps, currentStepIndex, selectedTypes,  ...props}) => {

    useEffect( () => {
        if (selectedTypes) {
             props.setCreateTaskStepsAction(selectedTypes);
             props.setQueryObjectAction({types: selectedTypes});
             props.doneStepAction();
        }
    }, [selectedTypes]);





    const handleSubmit = (values) => {
        const {selectedTaskTypes} = values;
        props.setSelectedTypesAction(selectedTaskTypes);
    };

    return (
        <TaskTypeForm  onSubmit={handleSubmit}/>
    )
};

SelectTaskTypes.propTypes = {};

SelectTaskTypes.defaultPros = {};

SelectTaskTypes.propTypes = {};

SelectTaskTypes.defaultPros = {};

const mapStateToProps = store => {
    const {steps, currentStepIndex} = store.createContestSteps;
    const {selectedTypes, typesCombinations} = store.createContestTaskTypes;
    return {selectedTypes, typesCombinations, steps, currentStepIndex};
};

const mapDispatchToProps = dispatch => ({
    doneStepAction: () => dispatch(doneCurrentStepActionCreator()),
    setSelectedTypesAction: (types) => dispatch(setSelectedTypesActionCreator(types)),
    setCreateTaskStepsAction: (taskTypes) => dispatch(setCreateTaskStepsActionCreator(taskTypes)),
    setQueryObjectAction: (query) => dispatch(createContestSetQueryStringCreator(query)),
    nextStepAction: () => dispatch(nextCreateContestStepActionCreator())

});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTaskTypes)
