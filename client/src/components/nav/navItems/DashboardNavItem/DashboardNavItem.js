import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import Icon from './Icon/Icon';
import {ICON_IMAGES_URL} from "../../../../api/apiPaths";
import styles from './DashboardNavItem.module.scss';


export function DashboardNavItem(props) {

    const {icon, to, title} = props;

    return (
        <NavLink activeClassName={styles.active} to={to}>
            <Icon icon={icon}/>
            {
                title
            }
            <img className={styles.arrow} src={`${ICON_IMAGES_URL}/chevron.svg`} alt=">>"/>
        </NavLink>
    )
}

DashboardNavItem.propTypes = {
    icon: PropTypes.string,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

DashboardNavItem.defaultProps = {

};
