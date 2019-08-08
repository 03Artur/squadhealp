import React, {useEffect} from 'react';
import ContestForm from "../../../../components/forms/ContestForm/ContestForm";
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {connect} from 'react-redux';
import {
    createContestActionCreator, doneCurrentStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/contest/constestActionCreators";


function CreateContest({contest, doneStepAction, createContestAction, prevStepAction, steps, currentStepIndex, ...props}) {


    const submit = (values) => {
        createContestAction(values);
    };
    useEffect(() => {
        if (contest && steps[currentStepIndex]) {
            doneStepAction()
        }
    }, [contest]);


    return (
        <React.Fragment>
            <ContestForm onSubmit={submit}/>
            <StartContestNav onPrevClick={prevStepAction} onNextClick={submit}/>
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

