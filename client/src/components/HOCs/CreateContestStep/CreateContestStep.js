/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';


import StartContestNav from "../../navigations/StartContestNav/StartContestNav";
import {
    nextCreateContestStepActionCreate,
    prevCreateContestStepActionCreate
} from "../../../actions/contest/constestActionCreators";

/*
* UTILS
* */


const CreateContestStep = (step) => {

    const StepComponent = (props) => {


        const onNextClick = () => {

            step.onSubmit()

        };

        const onPrevClick = () => {
            props.prevStepAction()
        };

        const Form = step.component;
        return (
            <Fragment>
                <Form onSubmi={step.onSubmit} onSubmitSuccess={props.nextStepAction} {...props}/>
                {
                    !step.isNotRenderNav && <StartContestNav onPrevClick={onPrevClick} onNextClick={onNextClick}/>
                }
            </Fragment>
        )
    };

    const mapStateToProps = store => ({});

    const mapDispatchToProps = dispatch => ({
        nextStepAction: () => dispatch(nextCreateContestStepActionCreate()),
        prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
    });

   return connect(mapStateToProps, mapDispatchToProps)(StepComponent)


};


export default CreateContestStep
