import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestInfo.module.scss';
import {PATHS} from "../../../../../constants";
import {Link} from 'react-router-dom';

const ContestInfo = (props) => {
    const {
        contest: {
            id: taskId,
            title,
            type,
            style,
            contest,
        },
    } = props;

    return (
        <Fragment>
            <Link to={`${PATHS.AFFILIATE_DASHBOARD_ENTRIES}?taskId=${taskId}`}>
                <h5 className={styles.taskTitle}>
                    {title}
                </h5>
            </Link>
            <div className={styles.infoContainer}>
                <h6 className={styles.typeInfo}>{`${type} / ${style}`}</h6>
                <p className={styles.description}>
                    {contest.description}
                </p>
            </div>
        </Fragment>
    )
};

ContestInfo.propTypes = {
    className: PropTypes.string,
    contest: PropTypes.object,
};

ContestInfo.defaultProps = {};

export default ContestInfo;
