

import React, {Component, Fragment, useEffect,} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    doneCurrentStepActionCreator,
    removeSelectedTypesActionCreator,
    setSelectedTypesActionCreator
} from "../../../../actions/contest/constestActionCreators";
import TaskTypeForm from "../../../../components/forms/TaskTypeForm/TaskTypeForm";




const SelectTaskTypes = ({typesCombinations, steps, currentStepIndex, selectedTypes, doneStepAction, ...props}) => {


    useEffect(() => {

        if (selectedTypes && !steps[currentStepIndex].isDone) {

            doneStepAction();
        }
    }, [selectedTypes]);

    const handleSubmit = (values) => {
        const {selectedTaskTypes} = values;
        props.setSelectedTypesAction(selectedTaskTypes);
    };

    return (
        <TaskTypeForm onSubmitSuccess={doneStepAction}  onSubmit={handleSubmit}/>
    )
};

SelectTaskTypes.propTypes = {};

SelectTaskTypes.defaultPros = {};

/*
* React redux
* */
SelectTaskTypes.propTypes = {};

SelectTaskTypes.defaultPros = {};

const mapStateToProps = store => {
    const {steps, currentStepIndex} = store.createContestSteps;
    const {selectedTypes, typesCombinations} = store.selectedTaskTypes;
    return {selectedTypes, typesCombinations, steps, currentStepIndex};
};

const mapDispatchToProps = dispatch => ({
    removeSelectedTypesAction: () => dispatch(removeSelectedTypesActionCreator()),
    doneStepAction: () => dispatch(doneCurrentStepActionCreator()),
    setSelectedTypesAction: (types) => dispatch(setSelectedTypesActionCreator(types)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTaskTypes)
