import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterProp.module.scss';
import FilterItem from "./FilterItem/FilterItem";

const FilterProp = (props) => {
    const {title, values} = props;

    const renderItems = () => {
        return values.map(value => <FilterItem key={value.title} {...value}/>)
    };

    return (
        <li className={styles.propContainer}>
            <h6 className={styles.propTitle}>{title}</h6>
            <ul className={styles.propItemContainer}>
                {renderItems()}
            </ul>
        </li>
    )
};

FilterProp.propTypes = {
    className: PropTypes.string,

    title: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,

};

FilterProp.defaultProps = {};


export default FilterProp;
