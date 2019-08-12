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
    doneCurrentStepActionCreator,
    nextCreateContestStepActionCreator,
    setCreateTaskStepsActionCreator, setSelectedTypesActionCreator,
} from "../../actions/contest/constestActionCreators";



let StartContestPage = ({steps, currentStepIndex, ...props}) => {


    useEffect(() => {
        if(props.location.search){
            const query = queryString.parse(props.location.search);

            if(query.types){
                props.setSelectedTypesAction(query.types);
            }
        }

    }, []);

    useEffect(() => {
        if (props.contest) {
            props.doneStepAction({contestId: props.contest.id})
        }
    }, [props.contest]);

    useEffect(() => {
        if (props.selectedTypes) {
            props.setCreateTaskStepsAction(props.selectedTypes);
            props.doneStepAction({types: props.selectedTypes});
        }
    }, [props.selectedTypes]);

    useEffect(() => {
        console.group("useEffect [steps[currentStepIndex].query]");
        console.groupEnd();

        if (steps[currentStepIndex].query) {
            props.nextStepAction();
        }
    }, [steps[currentStepIndex].query]);


    useEffect(() => {
        const currentStepPath = steps[currentStepIndex].path;
        if (currentStepPath !== props.location.pathname) {
            /*get relevant query string*/
            const query = steps.reduce((result, step) => {
                return step.query ? {...result, ...step.query} : result;
            }, ({}));

            props.history.push(`${currentStepPath}?${queryString.stringify(query)}`);
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

const mapStateToProps = store => {

    return {
        ...store.createContestSteps,
        ...store.createContest,
        ...store.createContestTaskTypes,
    }
};

const mapDispatchToProps = dispatch => ({
    nextStepAction: () => dispatch(nextCreateContestStepActionCreator()),
    setCreateTaskStepsAction: (taskTypes) => dispatch(setCreateTaskStepsActionCreator(taskTypes)),
    setSelectedTypesAction: (types) => dispatch(setSelectedTypesActionCreator(types)),
    doneStepAction: query => dispatch(doneCurrentStepActionCreator(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
