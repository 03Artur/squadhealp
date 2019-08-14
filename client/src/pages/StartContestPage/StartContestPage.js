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
    getContestInDrawActionCreator,
} from "../../actions/actionCreators/contestActionCreators/constestActionCreators";


let StartContestPage = (props) => {

    const {query, steps, currentStepIndex,contest,tasks} = props;


    useEffect(() => {


    }, [props.error]);

    useEffect(() => {
        if (query.contestId && !props.contest) {
            console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",query.contestId);
            props.loadContestInDrawAction(query.contestId);

        }
    }, [query.contestId]);

    useEffect(() => {

        if (steps[currentStepIndex].path !== props.location.pathname) {
            props.history.push(`${steps[currentStepIndex].path}?${queryString.stringify(query)}`);
        }

    }, [currentStepIndex]);


    return (
        <Fragment>
            <ProgressInfo/>
            <Route path={COMPLEX_PATH.SELECT_TASK_TYPE} component={SelectTaskTypes}/>
            <Route path={COMPLEX_PATH.CREATE_CONTEST} component={CreateContest}/>

            <Route path={COMPLEX_PATH.CREATE_TASK} component={CreateTask}/>

            <Route path={COMPLEX_PATH.TASK_PAYMENT} render={props => (<h1>Where's the money, Lebowski?</h1>)}/>
        </Fragment>
    )
};

const mapStateToProps = store => ({
    ...store.contestCreation,
});

const mapDispatchToProps = dispatch => ({
    loadContestInDrawAction: contestId => dispatch(getContestInDrawActionCreator(contestId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
