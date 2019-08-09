/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

import styles from './ProgressInfo.module.scss';
import ProgressBar from "./ProgressBar/ProgressBar";

/*
* UTILS
* */
import {CREATE_CONTEST_STEP_INFO} from "../../constants/createContestConstants";


const ProgressInfo = ({steps, currentStepIndex, ...props}) => {


    const renderInfo = () => {

        const step = steps[currentStepIndex];

        return (
            <React.Fragment>
                <h2>
                    {step.title}
                </h2>
                <p>
                    {step.description}
                </p>
            </React.Fragment>
        );
    };

    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={[styles.col, styles.stepInfo].join(' ')}>
                        {
                            renderInfo()
                        }
                    </div>

                    <div className={[styles.col, styles.progressBarContainer].join(' ')}>
                        <ProgressBar/>
                    </div>
                </div>
            </div>
        </div>
    )
};

ProgressInfo.propTypes = {};

ProgressInfo.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => ({
    ...store.createContestSteps,

});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressInfo)
