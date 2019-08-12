import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import {
    createContestSetQueryStringCreator,
    doneCurrentStepActionCreator, nextCreateContestStepActionCreator,
    removeSelectedTypesActionCreator, setCreateTaskStepsActionCreator,
    setSelectedTypesActionCreator
} from "../../../../actions/contest/constestActionCreators";
import TaskTypeForm from "../../../../components/forms/createContestForms/TaskTypeForm/TaskTypeForm";
import {CREATE_CONTEST_STEP_INFO, CREATE_CONTEST_STEPS} from "../../../../constants/createContestConstants";


const SelectTaskTypes = ({typesCombinations, steps, currentStepIndex, selectedTypes, ...props}) => {




    const handleSubmit = (values) => {
        const {selectedTaskTypes} = values;
        props.setSelectedTypesAction(selectedTaskTypes);
    };

    return (
        <TaskTypeForm onSubmit={handleSubmit}/>
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
    setSelectedTypesAction: (types) => dispatch(setSelectedTypesActionCreator(types)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTaskTypes)
