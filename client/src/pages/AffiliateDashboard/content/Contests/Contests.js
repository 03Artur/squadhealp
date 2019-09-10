import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Contests.module.scss';
import ContestList from "../../../../components/contest/List/ContestList";
import {getContestsActionCreator} from "../../../../actions/actionCreators/contestActionCreators/constestActionCreators";


const Contests = (props) => {

    const {getContestsAction, history} = props;

    useEffect(() => {

        getContestsAction(history.location.search);

    }, []);



    return (
        <div className={styles.container}>
            <ContestList/>
        </div>
    )
};

Contests.propTypes = {
    className: PropTypes.string,
};

Contests.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => {

    const {} = state.contestsReducer;

    return {}
};
const mapDispatchToProps = dispatch => ({
    getContestsAction: (queryString) => dispatch(getContestsActionCreator(queryString))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contests)
