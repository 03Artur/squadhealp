import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import TaskTypeForm from "../../../../components/forms/createContestForms/TaskTypeForm/TaskTypeForm";
import {
    addParamToQueryActionCreator, nextContestCreationStepActionCreator,
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import ACTION_TYPES from "../../../../actions/actiontsTypes";

const SelectTaskTypes = (props) => {




    const submit = (values) => {
        props.selectTaskTypesAction(values.types);
    };

    return (
        <TaskTypeForm onSubmitSuccess={props.nextStepAction} onSubmit={submit}/>
    );
};

const mapDispatchToProps = dispatch => ({
    selectTaskTypesAction: types => dispatch({type: ACTION_TYPES.SELECT_TASK_TYPES_ACTION, types}),
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
});

export default connect(null, mapDispatchToProps)(SelectTaskTypes)
