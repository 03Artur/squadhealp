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
import styles from './CreateContest.module.scss';
import ContestForm from "../ContestForm/ContestForm";
import StartContestNav from "../../navigations/StartContestNav/StartContestNav";
import {createContestActionCreator} from "../../../actions/contest/constestActionCreators";

/*
* UTILS
* */


const CreateContest = ({createContestAction, ...props}) => {

    const submit = values => {
        createContestAction(values);

    };
    const onPrevClick = () => {
        props.history.push(props.prevStep)
    }
    return (
        <Fragment>
            <h1>Create contest!</h1>
            <div className={styles.formContainer}>
                <div className={styles.container}>
                    <ContestForm onSubmit={submit}/>
                </div>
            </div>
            <StartContestNav onPrevClick={onPrevClick} onNextClick={submit}/>
        </Fragment>
    )
};

CreateContest.propTypes = {};

CreateContest.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({
    createContestAction: contest => dispatch(createContestActionCreator(contest))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest)
