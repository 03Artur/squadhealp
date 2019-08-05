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
    createContestActionCreator,
    createTaskActionCreator,
    setIsNameExistActionCreator,
} from "../../actions/contest/constestActionCreators";
import {taskPaymentActionCreator} from "../../actions/payment/taskPaymentActionCreator";

/*
* Components
* */
import SelectTaskTypes from "./SelectTaskTypes/SelectTaskTypes";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import CreateContest from "./CreateContest/CreateContest";

/*
* Styles
* */

import styles from './StartContestPage.module.scss';


/*
* UTILS
* */
import {TASK_TYPE, COMPLEX_PATH} from "../../constants";
import LinkList from "../../utils/classes/LinkList";


let StartContestPage = (props) => {


    useEffect(() => {
        const list = new LinkList([1, 2, 3, 4, 5, 6]);
        for (let item of list) {
            console.log(item);
        }
    });


    const steps = [PATH.CONTEST, `${PATH.CONTEST}${PATH.BUSINESS}`,];

    return (
        <Fragment>
            <ProgressInfo/>
            <Route exact path={steps[0]} render={props => (<SelectTaskTypes nextStep = {steps[1]} {...props}/>)}/>
            <Route path={steps[1]} render={props => (<CreateContest prevStep = {steps[0]}  {...props}/>)}/>
        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => ({

    ...store.selectedTaskTypes
});

const mapDispatchToProps = dispatch => ({
    createContestAction: contest => dispatch(createContestActionCreator(contest)),
    createTaskAction: task => dispatch(createTaskActionCreator(task)),
    paymentAction: (taskId, bankCard) => dispatch(taskPaymentActionCreator(taskId, bankCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
