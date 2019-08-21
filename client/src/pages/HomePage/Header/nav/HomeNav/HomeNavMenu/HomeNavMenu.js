import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import styles from "./HomeNavMenu.module.scss";

const testMenuItemStyle = {
    border: '4px solid #ff6542',
};

function testStyle(to) {
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
            <Link className={styles.menuTitleContainer} to='#'>

                <span className={styles.menuTitle}>
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

function HomeNavMenu(props) {
    const {navigation} = props;

    return (
            <ul className={[styles.navMenu, props.className].join(' ')}>
                {
                    navigation.map(menu => renderMenu(menu))
                }
            </ul>
    )
}

HomeNavMenu.propTypes = {
    className: PropTypes.string,
};

HomeNavMenu.defaultProps ={
    className: styles.menuContainer,
};

function mapStateToProps(state) {

    const {home: navigation} = state.siteNavigation;

    return {
        navigation
    };
}

export default connect(mapStateToProps)(HomeNavMenu);