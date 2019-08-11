import React, {useEffect} from 'react';
import ContestForm from "../../../../components/forms/ContestForm/ContestForm";
import {submit} from 'redux-form';
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {connect} from 'react-redux';
import {
    createContestActionCreator, createContestRemoveQueryStringCreator, doneCurrentStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/contest/constestActionCreators";
import {FORM_NAMES, TASK_TYPE} from "../../../../constants";


function CreateContest({contest, steps, currentStepIndex, ...props}) {


    const handleSubmit = (values) => {
        console.group("handleSubmit");
        console.log(!props.selectedTypes.includes(TASK_TYPE.NAME));
        console.groupEnd();
        props.createContestAction(!props.selectedTypes.includes(TASK_TYPE.NAME), values);

    };


    useEffect(() => {
        if (contest) {
            props.doneStepAction()
        }
    }, [contest]);

    const handlePrevClick = () => {
        console.log("handlePrevClick");
        props.removeQueryAction();
        props.prevStepAction();
    };

    return (
        <React.Fragment>
            <ContestForm onSubmit={handleSubmit}/>
            <StartContestNav onPrevClick={handlePrevClick}

                             onNextClick={props.submitFormAction}/>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    const {selectedTypes} = state.createContestTaskTypes;
    return {
        selectedTypes,
        ...state.createContest,

    }


};

const mapDispatchToProps = (dispatch) => ({
    createContestAction: (isNameExist, contest) => dispatch(createContestActionCreator(isNameExist, contest)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    doneStepAction: () => dispatch(doneCurrentStepActionCreator()),
    removeQueryAction: () => dispatch(createContestRemoveQueryStringCreator()),
    submitFormAction: () => dispatch(submit(FORM_NAMES.CONTEST_FORM)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);

