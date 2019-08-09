
import React, {Fragment, useEffect,} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { nextCreateContestStepActionCreate,} from "../../actions/contest/constestActionCreators";
import SelectTaskTypes from "./steps/SelectTaskTypes/SelectTaskTypes";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import {COMPLEX_PATH} from "../../constants";
import CreateContest from './steps/CreateContest/CreateContest'
import CreateTask from "./steps/CreateTask/CreateTask";


let StartContestPage = ({steps, currentStepIndex, ...props}) => {

    useEffect(() => {
        const currentStepPath = steps[currentStepIndex].path;
        if (currentStepPath !== props.location.pathname) {
            props.history.push(currentStepPath);
        }
    }, [currentStepIndex]);

    useEffect(() => {
        if (steps[currentStepIndex].isDone) {
            console.group("useEffect [isDone]: ");
            props.nextStepAction();
            console.groupEnd();
        }
    }, [steps[currentStepIndex].isDone]);

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

StartContestPage.propTypes = {

};

StartContestPage.defaultPros = {

};

const mapStateToProps = store => {
    const {steps, currentStepIndex} = store.createContestSteps;
    return {
        steps,
        currentStepIndex,
        ...store.selectedTaskTypes,
    }
};

const mapDispatchToProps = dispatch => ({
    nextStepAction: () => dispatch(nextCreateContestStepActionCreate())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
