import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

import {connect} from 'react-redux';
import classNames from 'classnames';


import styles from './Submenu.module.scss';


const Submenu = (props) => {
    const {submenu, isMenuOpen} = props;

    const renderItem = (item) => {
        return (
            <li key={item.title} className={classNames(styles.itemStyle, {[styles.to]: item.to !== '#'})}>
                <NavLink to={item.to} activeClassName={styles.linkActiveStile} className={styles.linkStyle}>
                    {item.title}
                </NavLink>
            </li>
        )
    };

    const renderItems = () => {
        return submenu.map(renderItem)
    };

    return (
        <ul className={classNames({
            [styles.submenuContainerMenuOpen]: isMenuOpen,
            [styles.submenuContainerMenuClose]: !isMenuOpen
        })}>
            {
                renderItems()
            }
        </ul>
    )
};


Submenu.propTypes = {
    className: PropTypes.string,
    submenu: PropTypes.array,
};

Submenu.defaultProps = {
    submenu: [],

};

/*
* React redux
* */
const mapStateToProps = store => {
    const {isOpen} = store.affiliateDashboardMenu;

    return {
        isMenuOpen: isOpen,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Submenu)
