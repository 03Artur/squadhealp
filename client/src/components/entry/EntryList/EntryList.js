import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './EntryList.module.scss';
import EntryItem from "./EntryItem/EntryItem";
import Spinner from "../../Spinner/Spinner";


const EntryList = (props) => {

    const {entries, isFetching} = props;


    const renderEntries = () => {
        return entries.map(entry => (<EntryItem key={entry.id} {...entry}/>))
    };
    const renderLoading = () => {
        if (isFetching) {
            return (
                <li className={styles.spinnerContainer}>
                    <Spinner/>
                </li>
            )
        }
    }
    return (
        <ul className={styles.list}>
            {
                renderEntries()
            }

        </ul>
    )
};

EntryList.propTypes = {
    className: PropTypes.string,
};

EntryList.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => {
    const {entries, isFetching} = state.entriesReducer;

    return {
        entries,
        isFetching,
    }

};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList)
