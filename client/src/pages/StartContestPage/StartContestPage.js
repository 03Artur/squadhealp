import React, {Fragment, useEffect,} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {nextCreateContestStepActionCreator,} from "../../actions/contest/constestActionCreators";
import SelectTaskTypes from "./steps/SelectTaskTypes/SelectTaskTypes";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import {COMPLEX_PATH} from "../../constants";
import CreateContest from './steps/CreateContest/CreateContest'
import CreateTask from "./steps/CreateTask/CreateTask";
import queryString from 'query-string';


let StartContestPage = ({steps, currentStepIndex, ...props}) => {

    useEffect(() => {
        if (steps[currentStepIndex].isDone) {
            props.nextStepAction();
        }
    }, [steps[currentStepIndex].isDone]);

    useEffect(() => {
        console.group("useEffect[currentStepIndex]");
        const currentStepPath = steps[currentStepIndex].path;
        console.log('currentStepPath: ', currentStepPath);
        console.log('currentStepIndex: ', currentStepIndex);
        if (currentStepPath !== props.location.pathname) {

            props.history.push(`${currentStepPath}?${queryString.stringify(props.query)}`);


        }
        console.groupEnd()
    }, [currentStepIndex]);

    return (
        <Fragment>
            <ProgressInfo/>
            <Route path={COMPLEX_PATH.SELECT_TASK_TYPE} component={SelectTaskTypes}/>
            <Route path={COMPLEX_PATH.CREATE_CONTEST} component={CreateContest}/>
            <Route path={`${COMPLEX_PATH.CREATE_TASK}?type=${"Name"}`} component={CreateTask}/>
            <Route path={COMPLEX_PATH.TASK_PAYMENT} render={props => (<h1>Where's the money, Lebowski?</h1>)}/>
        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => {
    const {steps, currentStepIndex} = store.createContestSteps;
    const {query} = store.createContestQuery;
    return {
        query,
        steps,
        currentStepIndex,
        ...store.createContestTaskTypes,
    }
};

const mapDispatchToProps = dispatch => ({
    nextStepAction: () => dispatch(nextCreateContestStepActionCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
