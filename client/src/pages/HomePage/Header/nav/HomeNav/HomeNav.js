import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './HomeNav.module.scss';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../../components/Logo/Logo";
import LinkButton from "../../../../../components/headers/LinkButtun/LinkButton";

const testMenuItemStyle = {border: '1px solid #ff6542'};

function testStyle(to) {
    return to?testMenuItemStyle:null;
}

const MenuItem = (props) => {
    const {item} = props;
    if (Array.isArray(item)) {
        return (
            <React.Fragment>
                <li className={styles.divider}/>
                {
                    item.map(elem => MenuItem(elem))
                }
            </React.Fragment>
        )
    } else {
        return (
            <li key={item.title} className={styles.menuItem}>
                <Link className={styles.itemTitle} to={item.to} styles={testStyle(item.to)}>
                    {
                        item.title
                    }
                </Link>
            </li>
        )
    }
};

MenuItem.propTypes = {
    item: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            to: PropTypes.oneOfType(
                [
                    PropTypes.string,
                    PropTypes.shape({
                        pathname: PropTypes.string.isRequired,
                        search: PropTypes.string,
                    })
                ]
            ).isRequired,
        }).isRequired,
    ]),
};


const Menu = (props) => {
    const {title, items} = props;

    return (

        <li key={title} className={styles.dropDown}>
            <Link className={styles.menuTitle}>
                <span>
                {
                    title
                }
                </span>
                <FontAwesomeIcon className={styles.chevron} icon={faChevronDown}/>

            </Link>
            <ul className={styles.dropDownMenu}>
                <MenuItem item={items}/>
            </ul>
        </li>
    );
};

Menu.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};


function HomeNav(props) {

    const {navigation} = props;

    return (
        <nav className={styles.nav}>
            <Logo/>
            <ul className={styles.menuContainer}>
                {
                    navigation.map(menu => <Menu {...menu}/>)
                }
            </ul>
            <LinkButton/>
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
