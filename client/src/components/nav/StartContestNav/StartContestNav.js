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
import styles from './StartContestNav.module.scss';
import NavButton from "./NavButton/NavButton";

/*
* UTILS
* */


const StartContestNav = (props) => {


    return (
        <div className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <p className={styles.col}>You are almost finished. Select a pricing package in the next step</p>
                    <div className={[styles.col, styles.buttonContainer].join(' ')}>
                        <NavButton text={props.prevButtonText}  onClick={props.onPrevClick}/>
                        <NavButton text={props.nextButtonText}  onClick={props.onNextClick} className={styles.nextButton}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

StartContestNav.propTypes = {
    onNextClick: PropTypes.func,
    onPrevClick: PropTypes.func,
    prevButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,

};
StartContestNav.defaultProps = {
    onNextClick: (e) =>e,
    onPrevClick: (e) =>e,
    prevButtonText: 'back',
    nextButtonText: 'next',
};
/*const defaultOnClick = function (e) {
    e.preventDefault()
};

StartContestNav.defaultPros = {
    onNextClick: defaultOnClick,
    onPrevClick: defaultOnClick,
};*/

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestNav)
