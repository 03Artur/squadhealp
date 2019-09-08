
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './FilterResult.module.scss';
import FilterResultItem from "./FilterResultItem/FilterResultItem";

import Icon from '@mdi/react'
import { mdiSync } from '@mdi/js';
import {resetFilterActionCreator} from "../../../actions/actionCreators/contestActionCreators/contestFilterActionCreator";

const FilterResult = (props) => {

    const {selectedValues, resetFilterAction} = props;

    const renderResultItem = () => {
        const items = [];
        selectedValues.forEach((value, key) => {

            items.push(
                <FilterResultItem key={key} title={value.title}/>
            );
        });
        return items;
    };

    return (
        <ul className={styles.container}>
            {
                renderResultItem()
            }
            <li onClick={resetFilterAction} className={styles.resetButton}>
                <Icon className={styles.icon} path={mdiSync} size={'15px'}/>Reset Filter
            </li>
        </ul>
    )
};

FilterResult.propTypes = {
    className: PropTypes.string,
};

FilterResult.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => {
    const {selectedValues} = state.contestFilterReducer;

    return {
        selectedValues,
    }
};
const mapDispatchToProps = dispatch => ({
    resetFilterAction: () => dispatch(resetFilterActionCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterResult)
