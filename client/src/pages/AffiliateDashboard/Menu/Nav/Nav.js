import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import styles from './Nav.module.scss'
import NavItem from "./NavItem/NavItem";

function Nav(props) {

    const {navItems, isMenuOpen} = props;
    const [openMenuItemIndex, setOpenMenuItemIndex] = useState(null);

    useEffect(() => {


    }, []);


    const renderNavItem = (item, index) => {

        const onClick = () => {
            if (isMenuOpen) {

                setOpenMenuItemIndex((index === openMenuItemIndex ? null : index));
            }
        };
        const onMouseOver = () => {
            if (!isMenuOpen) {
                setOpenMenuItemIndex(index);
            }
        };

        return (
            <NavItem key={index} onClick={onClick}
                      onMouseOver={onMouseOver}
                      isActive={index === openMenuItemIndex}
                      icon={item.icon} submenu={item.items} title={item.title}/>
        )

    };

    const renderNavItems = () => {
        return navItems.map(renderNavItem)
    };

    return (
        <nav className={styles.navContainer}>
            {
                renderNavItems()
            }
        </nav>
    );
}


function mapStateToProps(state) {

    const {navItems} = state.affiliateDashboardNav;
    const {isOpen} = state.affiliateDashboardMenu;

    return {
        navItems,
        isMenuOpen: isOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

