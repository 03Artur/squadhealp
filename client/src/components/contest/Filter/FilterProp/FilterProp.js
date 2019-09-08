import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterProp.module.scss';
import FilterItem from "./FilterItem/FilterItem";
import {connect} from 'react-redux';
import _ from 'lodash';
import {
    addPropsToFilterActionCreator,
    removeFilterPropsActionCreator
} from "../../../../actions/actionCreators/contestActionCreators/contestFilterActionCreator";

const FilterProp = (props) => {
    const {title, values, filter} = props;

    const renderItems = () => {

        return values.map(filterItemValue => {
                const {title: itemTitle, value} = filterItemValue;
                return (
                    <FilterItem key={itemTitle}
                                valueKey = {title}
                                value={value}
                                title={itemTitle}
                                isChecked={_.keys(value).every(key => _.isEqual(filter[key], value[key]))}
                    />
                );
            }
        )
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


const mapStateToProps = state => {
    const {filter} = state.contestFilterReducer;

    return {
        filter
    }
};


export default connect(mapStateToProps)(FilterProp);
