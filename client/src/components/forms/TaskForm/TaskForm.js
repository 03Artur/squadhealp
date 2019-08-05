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
import styles from './TaskForm.module.scss';
import StartContestNav from "../../navigations/StartContestNav/StartContestNav";
import {createTaskActionCreator} from "../../../actions/contest/constestActionCreators";

/*
* UTILS
* */



const Template = (props) => {



    return (
        <Fragment>
            <StartContestNav onNextClick={} onPrevClick={}/>
        </Fragment>

    )
};

Template.propTypes = {

};

Template.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => {
        const {selectedTypes} = store.selectedTaskTypes;
        return {selectedTypes};
};
const mapDispatchToProps = dispatch => ({
    createTaskAction: task => dispatch(createTaskActionCreator(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Template)
