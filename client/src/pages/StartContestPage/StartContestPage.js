/*
* React
* */
import React, {Component, Fragment, useEffect,} from 'react';
import {Route} from 'react-router-dom'
/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import TaskTypeCard from "../../components/TaskTypeCard/TaskTypeCard";
/*
* Styles
* */
import styles from './StartContestPage.module.scss';
import {setSelectedTypesActionCreator} from "../../actions/contest/constestActionCreators";

/*
* UTILS
* */
import {TASK_TYPE_DESCRIPTION, TASK_TYPE_IMAGES, TASK_TYPE} from "../../constants";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import StartContestNav from "../../components/navigations/StartContestNav/StartContestNav";

let StartContestPage = () => {



    return (
        <Fragment>
            <ProgressInfo />
            <Route path={}/>
            <StartContestNav />
        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => store.taskTypes;
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage)
