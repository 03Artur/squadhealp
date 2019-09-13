import React, {Component, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestsPage.module.scss';
import ContestFilter from "../../components/contest/Filter/Filter";
import queryString from 'query-string';
import FilterResult from "../../components/contest/FilterResult/FilterResult";
import classNames from 'classnames';
import ContestList from "../../components/contest/List/ContestList";
import {getContestsActionCreator} from "../../actions/actionCreators/contestActionCreators/constestActionCreators";
import _ from 'lodash';
import {PATHS} from "../../constants";

let count = 0;
const ContestsPage = (props) => {

    const {
        filter,
        history,
        limit,
        offset,
        getContestsAction,
        selectedContest,
    } = props;


    useEffect(() => {
        getContestsAction(history.location.search);

    }, [history.location.search]);

    useEffect(() => {
        if(selectedContest){
            history.push(`${PATHS.CONTEST}/${selectedContest.id}`)
        }
    }, [selectedContest]);

    useEffect(() => {

        const {location: {search}} = history;
        const searchObj = queryString.parse(search);
        if (!_.isEqual(filter, searchObj)) {


            const newSearch = queryString.stringify({
                ...searchObj,
                ...filter,
                limit,
                offset,
            });
            history.push({
                search: newSearch
            });
        }
    }, [filter]);

    return (
        <Fragment>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h4 className={styles.title}>Contests</h4>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentRow}>
                    <div className={classNames(styles.filterContainer, styles.col)}>
                        <ContestFilter/>
                    </div>
                    <div className={classNames(styles.filterResultContainer, styles.col)}>
                        <FilterResult/>
                        <ContestList/>
                    </div>
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
    const {filter} = state.contestFilterReducer;
    const {limit, offset} = state.contestPaginationReducer;
    const {contest} = state.selectedContest;
    return {
        filter,
        limit,
        offset,
        selectedContest: contest,
    }
};
const mapDispatchToProps = dispatch => ({
    getContestsAction: (search) => dispatch(getContestsActionCreator(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestsPage)
