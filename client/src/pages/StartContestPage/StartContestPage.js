/*
* React
* */
import React, {Fragment, useEffect,} from 'react';
import {Route} from 'react-router-dom';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {
    setIsNameExistActionCreator,
} from "../../actions/contest/constestActionCreators";

/*
* Components
* */
import SelectTaskTypes from "./steps/SelectTaskTypes/SelectTaskTypes";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";

/*
* Styles
* */

import styles from './StartContestPage.module.scss';


/*
* UTILS
* */
import createContestStep from "../../components/HOCs/CreateContestStep/CreateContestStep";
import {COMPLEX_PATH} from "../../constants";
import CreateContest from './steps/CreateContest/CreateContest'
import CreateTask from "./steps/CreateTask/CreateTask";

let StartContestPage = ({steps, currentStepIndex, ...props}) => {

    useEffect(() => {

        if (steps[currentStepIndex].isDone && props.location.pathname !== steps[props.currentStepIndex].path) {
            props.history.push(steps[props.currentStepIndex].path);
        }

    }, [steps[currentStepIndex].isDone]);



    return (
        <Fragment>
            <ProgressInfo/>
            <Route path={COMPLEX_PATH.SELECT_TASK_TYPE} component = {SelectTaskTypes}/>
            <Route path={COMPLEX_PATH.CREATE_CONTEST} component = {CreateContest}/>
            <Route path={COMPLEX_PATH.CREATE_CONTEST} component = {CreateTask}/>
            <Route path ={COMPLEX_PATH.TASK_PAYMENT} render = {props=>(<h1>Where's the money, Lebowski?</h1>)}/>
        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => {

    const {steps, currentStepIndex} = store.createContestSteps;
    return {
        ...store.selectedTaskTypes,
        steps,
        currentStepIndex,
    }

};


export default connect(mapStateToProps)(StartContestPage)
