import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './AddEntryButton.module.scss';
import {Link} from 'react-router-dom';
import {PATHS} from "../../../../../../constants";
import classNames from 'classnames';

const AddEntryButton = (props) => {

    const {taskId, className} = props;

    return (
        <Link className={classNames(styles.link,className)} to={`${PATHS.ENTRIES}/${taskId}${PATHS.ENTRY}`}>
            <div className={styles.container}>
                Add Entry
            </div>
        </Link>
    )
};

AddEntryButton.propTypes = {
    className: PropTypes.string,
    taskId: PropTypes.number.isRequired,
};

AddEntryButton.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryButton)