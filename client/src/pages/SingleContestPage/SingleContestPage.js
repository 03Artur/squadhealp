import React, {Component, Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './SingleContestPage.module.scss';
import EntryList from "../../components/entry/EntryList/EntryList";
import {getEntriesActionCreator} from "../../actions/actionCreators/entryActionCreators/entryActionCreators";
import FileList from "../../components/FileList/FileList";
import queryString from 'query-string';
import {selectContestAction} from "../../actions/actionCreators/contestActionCreators/constestActionCreators";

const SingleContestPage = (props) => {

    const {match, contests, resetSelectedContestAction} = props;


    useEffect(() => {

        return resetSelectedContestAction;

    }, []);


    return (
        <Fragment>
            <FileList/>
            <EntryList/>
        </Fragment>
    )
};

SingleContestPage.propTypes = {
    className: PropTypes.string,
};

SingleContestPage.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => {

    const {contests} = state.contestsReducer;

    return {
        contests,
    }


};
const mapDispatchToProps = dispatch => ({
    resetSelectedContestAction: () => dispatch(selectContestAction(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContestPage)
