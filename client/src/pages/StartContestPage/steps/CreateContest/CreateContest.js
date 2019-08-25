import React, {useEffect} from 'react';
import ContestForm from "../../../../components/forms/createContestForms/ContestForm/ContestForm";
import {submit} from 'redux-form';
import StartContestNav from "../../../../components/nav/StartContestNav/StartContestNav";
import {connect} from 'react-redux';
import {createContestActionCreator,} from "../../../../actions/actionCreators/contestActionCreators/constestActionCreators";
import {FORM_NAMES, TASK_TYPE} from "../../../../constants";
import {
    addParamToQueryActionCreator, nextContestCreationStepActionCreator,
    prevCreateContestStepActionCreate
} from "../../../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import _ from 'lodash';
import styles from './CreateContest.module.scss';

function CreateContest(props) {

    const {contest, query: {types, contestId}} = props;

    const submit = (values) => {
        values.id = contestId;
        if (contestId && _.isEqual(values, contest)) {
            props.nextStepAction();
        } else {
            props.createContestAction(types.includes(TASK_TYPE.NAME), values);
        }
    };

    return (
        <React.Fragment>
            <div className={styles.formOuter}>
                <div className={styles.formContainer}>
                    <ContestForm initialValues={contest} onSubmitSuccess={props.nextStepAction} onSubmit={submit}/>
                </div>
            </div>
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

    createContestAction: (isNameExist, contest) => dispatch(createContestActionCreator(isNameExist, contest)),
    submitFormAction: () => dispatch(submit(FORM_NAMES.CONTEST_FORM)),
    //NAV
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
    prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);

