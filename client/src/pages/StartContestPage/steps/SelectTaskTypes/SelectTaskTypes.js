import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import {
    doneCurrentStepActionCreator,
    removeSelectedTypesActionCreator, setCreateContestStepsActionCreator,
    setSelectedTypesActionCreator
} from "../../../../actions/contest/constestActionCreators";
import TaskTypeForm from "../../../../components/forms/TaskTypeForm/TaskTypeForm";
import {CREATE_CONTEST_STEP_INFO, CREATE_CONTEST_STEPS} from "../../../../constants/createContestConstants";


const SelectTaskTypes = ({typesCombinations, steps, currentStepIndex, selectedTypes, doneStepAction, ...props}) => {


    useEffect(() => {
        if (selectedTypes) {
            const newSteps = [...steps];
            selectedTypes.forEach((item,index) => newSteps.push({ ...CREATE_CONTEST_STEP_INFO.get(item),isDone: false,title: `TASK ${index+1} of ${selectedTypes.length}: ${item}`}));
            props.setCreateContestStepsAction(newSteps);
        }
    }, [selectedTypes]);


    const handleSubmitSuccess = () => {
        doneStepAction();
    };


    const handleSubmit = (values) => {
        const {selectedTaskTypes} = values;
        props.setSelectedTypesAction(selectedTaskTypes);
    };
    return (
        <TaskTypeForm onSubmitSuccess={handleSubmitSuccess} onSubmit={handleSubmit}/>
    )
};

SelectTaskTypes.propTypes = {};

SelectTaskTypes.defaultPros = {};

SelectTaskTypes.propTypes = {};

SelectTaskTypes.defaultPros = {};

const mapStateToProps = store => {
    const {steps, currentStepIndex} = store.createContestSteps;
    const {selectedTypes, typesCombinations} = store.selectedTaskTypes;
    return {selectedTypes, typesCombinations, steps, currentStepIndex};
};

const mapDispatchToProps = dispatch => ({
    doneStepAction: () => dispatch(doneCurrentStepActionCreator()),
    setSelectedTypesAction: (types) => dispatch(setSelectedTypesActionCreator(types)),
    setCreateContestStepsAction: (steps) => dispatch(setCreateContestStepsActionCreator(steps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTaskTypes)
