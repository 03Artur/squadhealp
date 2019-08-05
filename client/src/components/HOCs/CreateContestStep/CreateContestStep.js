/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect}


import StartContestNav from "../../navigations/StartContestNav/StartContestNav";
import {
    nextCreateContestStepActionCreate,
    prevCreateContestStepActionCreate
} from "../../../actions/contest/constestActionCreators";

/*
* UTILS
* */


const CreateContestStep = (Form, step) => {

    const StepComponent = (props) => {


        const onNextClick = () => {

            step.value.onSubmit()

        };

        const onPrevClick = () => {
            props.prevStepAction()
        };


        return (
            <Fragment>
                <Form  {step.value.onSubmit} onSubmitSuccess={props.nextStepAction} {...props}/>
                <StartContestNav onPrevClick={onPrevClick} onNextClick={onNextClick}/>
            </Fragment>
        )
    };

    const mapStateToProps = store => ({});
    const mapDispatchToProps = dispatch => ({
        nextStepAction: () => dispatch(nextCreateContestStepActionCreate()),
        prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    });

    export default connect(mapStateToProps, mapDispatchToProps)(StepComponent)


};


export default CreateContestStep
