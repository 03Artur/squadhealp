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
import SelectTaskTypes from "../../components/forms/SelectTaskTypes/SelectTaskTypes";
import ProgressInfo from "../../components/ProgressInfo/ProgressInfo";
import CreateContest from "../../components/forms/CreateContest/CreateContest";

/*
* Styles
* */

import styles from './StartContestPage.module.scss';


/*
* UTILS
* */
import StartContestNav from "../../components/navigations/StartContestNav/StartContestNav";
import createContestStep from "../../components/HOCs/CreateContestStep/CreateContestStep";


let StartContestPage = ({steps, ...props}) => {

    useEffect(() => {
        if (steps) {
            if (steps.current) {
                props.history.push(steps.current.value.path);
            }
        }
    }, [steps]);

    const renderStep = (step) => {

        const Component = createContestStep(step);
        console.log(step);
        return (
            <Route key={step.path} path={step.path} render={props => <Component {...props}/>}/>
        );
    };

    const renderSteps = () => {
        const result = [];
        for (let step of steps) {
            result.push(
                renderStep(step)
            )
        }
        return result;
    };

    return (
        <Fragment>
            <ProgressInfo/>
            {
                renderSteps()
            }
            <StartContestNav/>
        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => ({

    ...store.selectedTaskTypes,
    ...store.createContestSteps,

});



export default connect(mapStateToProps)(StartContestPage)
