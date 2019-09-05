//
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react'
import {mdiCheckboxBlankCircleOutline, mdiChevronRight} from '@mdi/js';
import {connect} from 'react-redux';
import classNames from 'classnames';


import styles from './NavItem.module.scss';
import titleStyles from './NavItem.Title.module.scss';
import SubMenu from "./SubMenu/SubMenu";

const getColorClass = (isActive) => {
    return classNames({
        [titleStyles.color]: !isActive,
        [titleStyles.activeColor]: isActive,
    })
};

const getColor = (isActive) => {
    return isActive ? 'white' : '#cedce4';
};


const NavItem = (props) => {
    const {title, icon, subMenu, className, isActive, isMenuOpen} = props;


    const renderIcon = () => {
        return (
            <div className={isMenuOpen ? titleStyles.iconContainer : titleStyles.iconContainerClose}>
                <Icon path={icon} color={getColor(isActive)} size={'20px'}/>
            </div>
        )

    };
    const renderArrow = () => {
        return (
            <div className={titleStyles.arrowContainer}>
                <Icon path={mdiChevronRight} color={getColor(isActive)} size={'24px'} rotate={isActive ? 90 : 0}/>
            </div>
        )

    };
    const renderTitle = () => {

        return (
            <div className={titleStyles.titleContainer}>
                {renderIcon()}
                <div className={classNames(titleStyles.submenuTitle, getColorClass(isActive))}>
                    {title}
                    {renderArrow()}
                    <SubMenu/>
                </div>
            </div>
        )

    };


    return (
        <li onClick={props.onClick} onMouseOver={props.onMouseOver}
            className={classNames({[styles.navItem]: !isMenuOpen})}>
            {
                renderTitle()
            }
        </li>
    )
};

NavItem.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    submenu: PropTypes.array,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    isActive: PropTypes.bool,
};

NavItem.defaultProps = {
    title: 'title',
    icon: mdiCheckboxBlankCircleOutline,
    submenu: [],
    isSubmenuOpen: false,
    onClick: function () {

    }
};

const mapStateToProps = store => {

    const {isOpen} = store.affiliateDashboardMenu;

    return {
        isMenuOpen: isOpen,
    }

};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavItem)
