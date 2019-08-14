import React, {useEffect} from 'react';
import ContestForm from "../../../../components/forms/createContestForms/ContestForm/ContestForm";
import {submit} from 'redux-form';
import StartContestNav from "../../../../components/navigations/StartContestNav/StartContestNav";
import {connect} from 'react-redux';
import {createContestActionCreator,} from "../../../../actions/actionCreators/contestActionCreators/constestActionCreators";
import {FORM_NAMES, TASK_TYPE} from "../../../../constants";
import {
    contestCreationAddParamToQueryParamsObjCreator, nextContestCreationStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import _ from 'lodash';

function CreateContest(props) {

    const {contest, query: {types, contestId}} = props;

    const submit = (values) => {
        values.id = contestId;
        if(_.isEqual(values,contest)){
            props.nextStepAction()
        }
        else{
            props.createContestAction(types.includes(TASK_TYPE.NAME), values);
        }
    };

    return (
        <React.Fragment>
            <ContestForm onSubmitSuccess = { props.nextStepAction} initialValues={contest} onSubmit={submit}/>
            <StartContestNav onPrevClick={props.prevStepAction} onNextClick={props.submitFormAction}/>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    const {query, contest} = state.contestCreation;
    return {
        query,
        contest,
    }
};

const mapDispatchToProps = (dispatch) => ({
    addParamsToQueryAction: param => dispatch(contestCreationAddParamToQueryParamsObjCreator(param)),
    createContestAction: (isNameExist, contest) => dispatch(createContestActionCreator(isNameExist, contest)),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
    submitFormAction: () => dispatch(submit(FORM_NAMES.CONTEST_FORM)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);

