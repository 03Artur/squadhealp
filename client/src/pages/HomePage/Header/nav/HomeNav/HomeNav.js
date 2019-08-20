import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './HomeNav.module.scss';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../../components/Logo/Logo";
import LinkButton from "../../../../../components/headers/LinkButtun/LinkButton";
import {PATHS} from "../../../../../constants";

const testMenuItemStyle = {
    border: '4px solid #ff6542',
};

function testStyle(to) {
    console.log(to);
    return (to !== "#" ? testMenuItemStyle : null);
}

const renderMenuItem = (item) => {
    if (Array.isArray(item)) {
        return (
            item.map(elem => renderMenuItem(elem))

        )
    } else {
        return (
            <li key={item.title} className={styles.menuItem} style={testStyle(item.to)}>
                <Link className={styles.itemTitle} to={item.to}>
                    {
                        item.title
                    }
                </Link>
            </li>
        )
    }
};

const renderMenu = (menu) => {


    const renderItems = () => menu.items.map(
        (item, index) => (
            <React.Fragment key={index}>
                {
                    index > 0 && <li key={index} className={styles.divider}/>
                }
                {
                    renderMenuItem(item)
                }
            </React.Fragment>
        )
    );

    return (
        <li key={menu.title} className={styles.dropDown}>
            <Link className={styles.menuTitle} to='#'>
                <span>
                    {
                        menu.title
                    }
                </span>
                <FontAwesomeIcon className={styles.chevron} icon={faChevronDown}/>
            </Link>
            <ul className={styles.dropDownMenu}>
                {
                    renderItems()
                }
            </ul>
        </li>
    );
};


function HomeNav(props) {

    const {navigation} = props;
    return (
        <nav className={styles.nav}>
            <div style={styles.logoContainer}>
                <Logo className={styles.logo}/>
            </div>
            <div className={styles.menuContainer}>
                <ul className={styles.navMenu}>
                    {
                        navigation.map(menu => renderMenu(menu))
                    }
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <LinkButton className={styles.linkButton} to={PATHS.SELECT_TASK_TYPE}>Start Contest</LinkButton>
            </div>
        </nav>
    );
}


function mapStateToProps(state) {

    const {home: navigation} = state.siteNavigation;

    return {
        navigation
    };
}

export default connect(mapStateToProps)(HomeNav)
