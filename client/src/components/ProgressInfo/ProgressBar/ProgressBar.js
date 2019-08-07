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



const ProgressBar = ({steps, currentStep,...props}) => {


    const renderSteps = () => {
        const items = [];
            for(let item of steps){
                items.push(<Step title={item.title}/>)
            }
    };


    return (
        <div className={styles.container}>

        </div>
    )
};

ProgressBar.propTypes = {

};

ProgressBar.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => {
        const {steps, currentStep} = store.createContestSteps;
        return {steps, currentStep};
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)

