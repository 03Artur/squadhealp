import React, {useEffect} from 'react';
import ContestForm from "../../../../components/forms/ContestForm/ContestForm";
import {submit} from 'redux-form';
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {connect} from 'react-redux';
import {
    createContestActionCreator, doneCurrentStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/contest/constestActionCreators";


function CreateContest({contest, doneStepAction, createContestAction, prevStepAction, steps, currentStepIndex, ...props}) {


    const handleSubmit = (values) => {
        createContestAction(values);
    };

    const handlerSubmitSuccess = () => {
        doneStepAction()
    };

    useEffect(() => {
        if (contest && steps[currentStepIndex]) {
            doneStepAction()
        }
    }, [contest]);

    const onNextClick = () => props.dispatch("contestFrom");


    return (
        <React.Fragment>
            <ContestForm onSubmit={handleSubmit}/>
            <StartContestNav onPrevClick={prevStepAction} onSubmitSuccess = {handlerSubmitSuccess} onNextClick={onNextClick}/>
        </React.Fragment>
    )

}


const mapStateToProps = (state) => {
    const {contest} = state.createContest;
    const {steps, currentStepIndex} = state.createContestSteps;
    return {contest, steps, currentStepIndex};
};

const mapDispatchToProps = (dispatch) => ({
    createContestAction: (contest) => dispatch(createContestActionCreator(contest)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    doneStepAction: () => dispatch(doneCurrentStepActionCreator())

});


export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);

