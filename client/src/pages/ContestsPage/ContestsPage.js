import React, {Component, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestsPage.module.scss';
import ContestFilter from "../../components/contest/Filter/Filter";
import queryString from 'query-string';

const ContestsPage = (props) => {
    const {selectedProps,history} = props;




    useEffect(() => {

       history.push({search: queryString.stringify(filter)})

    },[selectedProps]);

    return (
        <Fragment>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h4 className={styles.title}>Contests</h4>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentRow}>
                    <ContestFilter/>
                </div>
            </div>
        </Fragment>
    )
};

ContestsPage.propTypes = {
    className: PropTypes.string,
};

ContestsPage.defaultProps = {};


const mapStateToProps = state => {
    const {selectedProps} = state.contestFilterReducer;

    return {
        selectedProps,
    }

};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage)
