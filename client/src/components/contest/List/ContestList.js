import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestList.module.scss';
import ContestItem from "./ContestItem/ContestItem";


const ContestList = (props) => {

    const {contests,count, isFetching} = props;

    const renderContests = () => {
        return contests.map(contest => {
            return <ContestItem key={contest.id} task={contest}/>
        })
    };

    useEffect(() => {


    }, []);

    return (
        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                <h4 className={styles.count}>{`${count} Contests`}</h4>
            </div>
            <ul className={styles.list}>
                {
                    renderContests()
                }
            </ul>
        </div>
    )
};

ContestList.propTypes = {
    className: PropTypes.string,
};

ContestList.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {contests, count, isFetching} = store.contestsReducer;
    return {
        contests,
        count,
        isFetching,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContestList)
