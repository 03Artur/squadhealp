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
import Step from './Step/Step'

/*
* styles
* */
import styles from './ProgressBar.module.scss';

/*
* UTILS
* */


const ProgressBar = ({steps, currentStepIndex, ...props}) => {

    const renderSteps = () => {
        return steps.map((item, index) => (

                <div key={index} className={styles.stepContainer}>
                    {
                        <div className={styles.stepConnection} style={index===0?{borderColor:"transparent"}:undefined}/>
                    }
                    <Step tip={`${index+1}. ${steps[currentStepIndex].progressTip}`} title={`${index+1}. ${steps[currentStepIndex].name}`} isDone={index < currentStepIndex}
                          isCurrent={index === currentStepIndex}/>
                </div>
            )
        );
    };

    return (
        <div className={styles.container}>
            {
                renderSteps()
            }
        </div>
    )
};






export default ProgressBar;

