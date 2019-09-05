import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';

import styles from './Nav.module.scss'
import NavItem from "./NavItem/NavItem";

function Nav(props) {

    const {navItems, isMenuOpen} = props;
    const [openMenuItemIndex, setOpenMenuItemIndex] = useState(null);
    const navEl = useRef(null)
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
    const onOutsideMouseOverHandler = (event) => {

        if ( !navEl.current.contains(event.target)) {

            setOpenMenuItemIndex(null)
        }
    };
    const renderNavItems = () => {
        return navItems.map(renderNavItem)
    };



    useEffect(() => {

        window.addEventListener('mouseover',onOutsideMouseOverHandler);
        return () => {
            window.removeEventListener('mouseover',onOutsideMouseOverHandler);
        }
    },[]);
    return (
        <nav  ref={navEl} className={styles.navContainer} >
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

