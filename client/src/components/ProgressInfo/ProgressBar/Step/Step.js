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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index';
import {faCheck} from '@fortawesome/free-solid-svg-icons/index';

/*
* styles
* */
import styles from './Step.module.scss';

/*
* UTILS
* */


const Step = ({isDone, isCurrent, tip, ...props}) => {

    const containerClasses = [styles.container, isCurrent&&styles.current,isDone&&styles.done];

    const renderTip = () => {
        return (
            <div className={styles.tipContainer}>{
                tip
            }</div>
        )
    };
    const renderCheck = () => {
        return (
            <FontAwesomeIcon icon={faCheck}/>
        )
    };
    const renderCircle = () => {
        return (
            <div className={styles.circle}/>
        )
    };

    const renderContent = () => {
        if (isCurrent) {
            containerClasses.push(styles.current);
            return (
                <Fragment>
                    {
                        renderCircle()
                    }
                    {
                        renderTip()
                    }
                </Fragment>
            )
        } else if (isDone) {
            containerClasses.push(styles.done);
            return renderCheck()
        }
    };

    return (
        <div className={containerClasses.join(' ')}>
            {
                renderContent()
            }
        </div>
    )
};

Step.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    isCurrent: PropTypes.bool,

};

Step.defaultPros = {
    title: "title",
    isDone: false,
    isCurrent: true,
};

/*
* React redux
* */


export default Step
