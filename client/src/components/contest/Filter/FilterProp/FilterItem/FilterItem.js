import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    addPropsToFilterActionCreator,
    removeFilterPropsActionCreator
} from "../../../../../actions/actionCreators/contestActionCreators/contestFilterActionCreator";
import _ from 'lodash';
import styles from './FilterItem.module.scss';
import classNames from 'classnames';





const FilterItem = (props) => {

    const {title, filter, value, addFilterPropAction, removeFilterPropAction,} = props;
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(_.keys(value).every(key => _.isEqual(filter[key], value[key])));
    },[filter]);

    const onClick = () => {
        if (isChecked) {
            removeFilterPropAction(_.keys(value));
        } else {
            addFilterPropAction(value);
        }
    };

    return (
        <li className={classNames(styles.container,{[styles.checked]:isChecked})} onClick={onClick}>
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
    value: PropTypes.object,
};

FilterItem.defaultProps = {};

const mapStateToProps = state => {

    const {filter} = state.contestFilterReducer;
    return {
        filter,
    }
};

const mapDispatchToProps = dispatch => ({
    addFilterPropAction: (value) => dispatch(addPropsToFilterActionCreator(value)),
    removeFilterPropAction: keys => dispatch(removeFilterPropsActionCreator(keys)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);