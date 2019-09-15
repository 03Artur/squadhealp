import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Filter.module.scss';
import FilterProp from "./FilterProp/FilterProp";


const Filter = (props) => {

    const {filterValues} = props;

    const renderProp = () => {

        return filterValues.map(filterValue => (
            <FilterProp key={filterValue.title} {...filterValue}/>
        ));
    };

    return (
        <div className={styles.filterContainer}>
            <h4 className={styles.filterTitle}>Filter</h4>
            <ul className={styles.propList}>
                {renderProp()}
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
    const {filterValues} = state.contestFilterReducer;

    return {
        filterValues,
    }

};

export default connect(mapStateToProps)(Filter)
