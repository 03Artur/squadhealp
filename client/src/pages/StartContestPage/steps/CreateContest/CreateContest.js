import React, {useEffect} from 'react';
import ContestForm from "../../../../components/forms/createContestForms/ContestForm/ContestForm";
import {submit} from 'redux-form';
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {connect} from 'react-redux';
import {
    createContestActionCreator,
    createContestRemoveQueryStringCreator,
    createContestSetQueryStringCreator,
    doneCurrentStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/contest/constestActionCreators";
import {FORM_NAMES, TASK_TYPE} from "../../../../constants";


function CreateContest(props) {

    const handleSubmit = (values) => {
        props.createContestAction(!props.selectedTypes.includes(TASK_TYPE.NAME), values);
    };

    const handlePrevClick = () => {
        props.prevStepAction();
    };

    return (
        <React.Fragment>
            <ContestForm onSubmit={handleSubmit}/>
            <StartContestNav onPrevClick={handlePrevClick} onNextClick={props.submitFormAction}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const {selectedTypes} = state.createContestTaskTypes;
    return {
        selectedTypes,
    }
};

const mapDispatchToProps = (dispatch) => ({
    createContestAction: (isNameExist, contest) => dispatch(createContestActionCreator(isNameExist, contest)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    submitFormAction: () => dispatch(submit(FORM_NAMES.CONTEST_FORM)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);

