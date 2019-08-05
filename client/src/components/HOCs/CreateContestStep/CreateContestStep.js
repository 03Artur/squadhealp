/*
* React
* */
import React, {useEffect, Component, Fragment} from 'react';
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

export default (step) => {

    const StepComponent = (props) => {



        const Form = step.form;
        return (
            <Fragment>
                <Form onPrevClick = {props.prevStepAction} onSubmit={step.onSubmit} onSubmitSuccess={step.onSubmitSuccess} {...props}/>
            </Fragment>
        )
    };

    const mapStateToProps = store => ({});

    const mapDispatchToProps = dispatch => ({
            nextStepAction: () => dispatch(nextCreateContestStepActionCreate()),
            prevStepAction: () => dispatch(prevCreateContestStepActionCreate()),
        })
    ;

    return connect(mapStateToProps, mapDispatchToProps)(StepComponent)


};



