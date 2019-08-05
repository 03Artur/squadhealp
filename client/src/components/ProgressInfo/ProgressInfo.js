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
import styles from './ProgressInfo.module.scss';
import createContestStepsReducer from "../../reducers/contest/createContestStepsReducer";

/*
* UTILS
* */



const ProgressInfo = ({steps,...props}) => {


    return (
        <div className={styles.container}>
            <div>
                <h2></h2>
                <p></p>
            </div>
        </div>
    )
};

ProgressInfo.propTypes = {

};

ProgressInfo.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => ({
    ...store.createContestSteps,

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressInfo)
