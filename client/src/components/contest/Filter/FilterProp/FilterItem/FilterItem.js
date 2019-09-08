import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    addPropsToFilterActionCreator,
    removeFilterPropsActionCreator
} from "../../../../../actions/actionCreators/contestActionCreators/contestFilterActionCreator";
import styles from './FilterItem.module.scss';
import classNames from 'classnames';
import _ from 'lodash';

const FilterItem = (props) => {

    const {title, isChecked, valueKey, value, addFilterPropAction, removeFilterPropAction, selectedValues,} = props;

    const onClick = () => {
        if (isChecked) {
            removeFilterPropAction(valueKey);
        } else {
            addFilterPropAction(valueKey, {value, title});
        }
    };

    useEffect(() => {
        if (isChecked && selectedValues.has(valueKey)) {
            if (!_.isEqual(selectedValues.get(valueKey).value, value)) {
                addFilterPropAction(valueKey, {value, title});
            }

        }
    }, []);

    return (
        <li className={classNames(styles.container, {[styles.checked]: isChecked})} onClick={onClick}>
            <div className={styles.checkbox}>
                <span className={styles.checkMark}/>
            </div>
            <span className={styles.title}>
                {title}
            </span>
        </li>
    )
};

FilterItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
    valueKey: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
};

FilterItem.defaultProps = {};

const mapStateToProps = state => {

    const {selectedValues} = state.contestFilterReducer;
    return {
        selectedValues,
    }
};

const mapDispatchToProps = dispatch => ({
    addFilterPropAction: (key, value) => dispatch(addPropsToFilterActionCreator(key, value)),
    removeFilterPropAction: (key) => dispatch(removeFilterPropsActionCreator(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);