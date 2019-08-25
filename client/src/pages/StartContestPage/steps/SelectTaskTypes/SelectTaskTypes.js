import React, {useEffect,} from 'react';
import {connect} from 'react-redux';
import TaskTypeForm from "../../../../components/forms/createContestForms/TaskTypeForm/TaskTypeForm";
import {
    addParamToQueryActionCreator, nextContestCreationStepActionCreator,
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";

const SelectTaskTypes = (props) => {

    const submit = (values) => {
        props.addParamToQueryAction({
                types: values.types,
            });
    };

    return (
        <TaskTypeForm onSubmitSuccess={props.nextStepAction} onSubmit={submit}/>
    );
};

const mapDispatchToProps = dispatch => ({
    addParamToQueryAction: query => dispatch(addParamToQueryActionCreator(query)),
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
});

export default connect(null, mapDispatchToProps)(SelectTaskTypes)
