import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Filter.module.scss';
import FilterProp from "./FilterProp/FilterProp";


const Filter = (props) => {

    const {filterProps} = props;

    const renderProp = () => {
        return filterProps.map(prop => <FilterProp key={prop.title} {...prop}/>);
    };


    return (
        <div className={styles.filterContainer}>
            <h4 className={styles.filterTitle}>Filter</h4>
            <ul className={styles.propList}>
                {
                    renderProp()
                }
            </ul>
        </div>
    )
};

Filter.propTypes = {
    className: PropTypes.string,
    filterProps: PropTypes.array,
};

Filter.defaultProps = {
    filterProps: [],
};


const mapStateToProps = state => {
    const {filterProps} = state.contestFilterReducer;

    return {
        filterProps,
    }

};

export default connect(mapStateToProps)(Filter)
