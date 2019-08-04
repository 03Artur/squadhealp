/*
* React
* */

import React, {Component, Fragment, useEffect,} from 'react';
import {Route} from 'react-router-dom';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import SelectTaskTypes from "./SelectTaskTypes/SelectTaskTypes";
/*
* Styles
* */
import styles from './StartContestPage.module.scss';
import {
    createContestActionCreator, createTaskActionCreator, setCreateContestStepsAction,
    setIsNameExistActionCreator,
    setSelectedTypesActionCreator
} from "../../actions/contest/constestActionCreators";

/*
* UTILS
* */
import {TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES, TASK_TYPE, PATH} from "../../constants";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import StartContestNav from "../../components/navigations/StartContestNav/StartContestNav";
import LinkList from "../../utils/classes/LinkList";
import ContestInfo from "./ContestInfo/ContestInfo";
import {taskPaymentActionCreator} from "../../actions/payment/taskPaymentActionCreator";

let StartContestPage = (props) => {


    useEffect(() => {
        const list = new LinkList([1, 2, 3, 4, 5, 6]);
        for (let item of list) {
            console.log(item);
        }
    })
    useEffect(() => {
        if (props.selectedTypes) {
            props.setIsNameExistAction(!props.selectedTypes.includes(TASK_TYPE.NAME));
        }

    }, [props.selectedTypes]);

    const onNextClick = () => {

        return
    }
    return (
        <Fragment>
            <ProgressInfo/>
            <Route exact path={PATH.START_CONTEST + "/"} render={props => (<SelectTaskTypes {...props}/>)}/>
            <Route path={`${PATH.START_CONTEST}${PATH.BUSINESS}`} render={props => (<ContestInfo {...props}/>)}/>
        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => ({

    ...store.selectedTaskTypes
});
const mapDispatchToProps = dispatch => ({
    setIsNameExistAction: isNameExist => dispatch(setIsNameExistActionCreator(isNameExist)),
    createContestAction: contest => dispatch(createContestActionCreator(contest)),
    createTaskAction: task => dispatch(createTaskActionCreator(task)),
    paymentAction: (taskId, bankCard) => dispatch(taskPaymentActionCreator(taskId, bankCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
