import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import TaskTypeForm from "../../../../components/forms/createContestForms/TaskTypeForm/TaskTypeForm";
import {
    contestCreationAddParamToQueryParamsObjCreator, nextContestCreationStepActionCreator, selectTaskTypesActionCreator,
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";

const SelectTaskTypes = (props) => {

    const {steps, currentStepIndex} = props;
    const {queryKey} = steps[currentStepIndex];


    const submit = (values) => {
        props.selectTaskTypesAction(
                 values.types,

        );
    };

    return (
        <TaskTypeForm onSubmitSuccess = {props.nextStepAction} onSubmit={submit}/>
    );
};

const mapStateToProps = state => {
    const {query, steps, currentStepIndex} = state.contestCreation;
    return {
        query,
        steps,
        currentStepIndex,
    }
};

const mapDispatchToProps = dispatch => ({
    selectTaskTypesAction: types => dispatch(selectTaskTypesActionCreator(types)),
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTaskTypes)
