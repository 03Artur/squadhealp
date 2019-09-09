
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './FilterResultItem.module.scss';
import {removeFilterPropsActionCreator} from "../../../../actions/actionCreators/contestActionCreators/contestFilterActionCreator";
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js';

const FilterResultItem = (props) => {

    const {removeFilterPropAction,title,valueKey} = props;

    const onClick = () => {
        removeFilterPropAction(valueKey)
    };

    return (
        <li onClick={onClick} className={styles.container}>
            <span>{title}<Icon className = {styles.icon} path={mdiClose} size={'14px'}/></span>
        </li>
    )
};

FilterResultItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    valueKey: PropTypes.string.isRequired,
};

FilterResultItem.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({
    removeFilterPropAction: (key) => dispatch(removeFilterPropsActionCreator(key)),

});

export default connect(mapStateToProps, mapDispatchToProps)(FilterResultItem)
