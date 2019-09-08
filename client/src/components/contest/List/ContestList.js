import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestList.module.scss';
import ContestItem from "./ContestItem/ContestItem";


const ContestList = (props) => {

    const {contests} = props;

    const renderContests = () => {
        return contests.map(contest => {
            return <ContestItem key={contest.id} contest={contest}/>
        })
    };

    useEffect(() => {


    }, []);

    return (
        <ul className={styles.container}>
            {
                renderContests()
            }
        </ul>
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
    const {contests} = store.contestsReducer;
    return {
        contests,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContestList)
