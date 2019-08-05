/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */


/*
* styles
* */
import styles from './Template.module.scss';
import StartContestNav from "../../../components/navigations/StartContestNav/StartContestNav";

/*
* UTILS
* */


const CreateContestStep = (Component, props, step) => {

    return (props) => {



        return (
            <Fragment>
                <Component {...props}/>
                <StartContestNav onNextClick={}/>
            </Fragment>
        )
    }


};

CreateContestStep.propTypes = {

    prevStepPath: PropTypes.string,
    nextStepPath: PropTypes.string,

};

CreateContestStep.defaultPros = {

    prevStepPath: null,
    nextStepPath: null,
};


export default CreateContestStep
