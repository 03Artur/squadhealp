import React, {Fragment, useEffect,} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import SelectTaskTypes from "./steps/SelectTaskTypes/SelectTaskTypes";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import {COMPLEX_PATH} from "../../constants";
import CreateContest from './steps/CreateContest/CreateContest'
import CreateTask from "./steps/CreateTask/CreateTask";
import queryString from 'query-string';
import {
    getContestInDrawActionCreator, insertTaskStepsToStepsActionCreator,
} from "../../actions/actionCreators/contestActionCreators/constestActionCreators";
import {nextContestCreationStepActionCreator} from "../../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import ContestPayment from "./steps/ContestPayment/ContestPayment";
import styles from './StartContestPage.module.scss';

let StartContestPage = (props) => {

    const {query, steps, currentStepIndex, contest, tasks} = props;


    useEffect(() => {


    }, [props.error]);

    useEffect(() => {
        if (query.contestId && !props.contest) {
            props.loadContestInDrawAction(query.contestId);
        }
    }, [query.contestId]);


    useEffect(() => {
            props.history.push(`${steps[currentStepIndex].path}?${queryString.stringify(query)}`);
    }, [currentStepIndex, query]);


    return (
        <Fragment>
            <ProgressInfo/>
            <Route path={COMPLEX_PATH.SELECT_TASK_TYPE} component={SelectTaskTypes}/>
            <Route path={COMPLEX_PATH.CREATE_CONTEST} component={CreateContest}/>
            <Route path={COMPLEX_PATH.CREATE_TASK} component={CreateTask}/>
            <Route path={COMPLEX_PATH.CONTEST_PAYMENT} component={ContestPayment}/>
        </Fragment>
    )
};

const mapStateToProps = store => ({
    ...store.contestCreation,
});

const mapDispatchToProps = dispatch => ({
    loadContestInDrawAction: contestId => dispatch(getContestInDrawActionCreator(contestId)),
    insertTaskStepsToStepsAction: types => dispatch(insertTaskStepsToStepsActionCreator(types)),
    nextStepAction: () => dispatch(nextContestCreationStepActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
