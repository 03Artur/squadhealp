import React from 'react';
import {connect} from 'react-redux';
import styles from './ProgressInfo.module.scss';
import ProgressBar from "./ProgressBar/ProgressBar";

const ProgressInfo = ({steps, currentStepIndex, ...props}) => {

    const renderInfo = () => {

        const stepInfo = steps[currentStepIndex];

        return (
            <React.Fragment>
                <h2>
                    {stepInfo.title}
                </h2>
                <p>
                    {stepInfo.description}
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
                        <ProgressBar steps = {steps} currentStepIndex = {currentStepIndex}/>
                    </div>
                </div>
            </div>
        </div>
    )
};



const mapStateToProps = store => {
    const {steps, currentStepIndex} = store.contestCreation;
    return {
        steps,
        currentStepIndex,
    }

};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressInfo)
