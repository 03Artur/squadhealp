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

/*
* Styles
* */

import styles from './StartContestPage.module.scss';


/*
* UTILS
* */
import createContestStep from "../../components/HOCs/CreateContestStep/CreateContestStep";


let StartContestPage = ({steps, ...props}) => {

    useEffect(() => {

        if (props.location.pathname !== props.currentStep.value.path) {
            props.history.push(props.currentStep.value.path);
        }

    }, [props.currentStep]);

    const renderStep = (step) => {

        const Component = createContestStep(step);

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

        </Fragment>
    )
};

StartContestPage.propTypes = {};

StartContestPage.defaultPros = {};

const mapStateToProps = store => {

const {steps,currentStep} = store.createContestSteps;
    return {
        ...store.selectedTaskTypes,
        steps,
        currentStep
    }

};


export default connect(mapStateToProps)(StartContestPage)
