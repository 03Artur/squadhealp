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

    const {title, selectedProps, value, addFilterPropAction, removeFilterPropAction,} = props;
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(selectedProps.has(title));
    }, [selectedProps]);

    const onClick = () => {
        if (isChecked) {
            removeFilterPropAction(title);
        } else {
            addFilterPropAction(title, value);
        }
    };

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
    value: PropTypes.object,
};

FilterItem.defaultProps = {};

const mapStateToProps = state => {

    const {selectedProps} = state.contestFilterReducer;
    return {
        selectedProps,
    }
};

const mapDispatchToProps = dispatch => ({
    addFilterPropAction: (value) => dispatch(addPropsToFilterActionCreator(value)),
    removeFilterPropAction: keys => dispatch(removeFilterPropsActionCreator(keys)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);