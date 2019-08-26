import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeNav.module.scss';
import Logo from "../../../../../components/Logo/Logo";
import LinkButton from "../../../../../components/headers/LinkButtun/LinkButton";
import {PATHS} from "../../../../../constants";
import HomeNavMenu from "./HomeNavMenu/HomeNavMenu";

function HomeNav(props) {

    return (
        <nav className={styles.nav}>
            <div className={styles.row}>
                <div className={styles.logoContainer}>
                    <Logo className={styles.logo}/>
                </div>
                <div className={styles.menuContainer}>
                    <HomeNavMenu/>
                </div>
                <div className={styles.buttonContainer}>
                    <LinkButton className={styles.linkButton} to={PATHS.SELECT_TASK_TYPE}>Start Contest</LinkButton>
                </div>
            </div>
        </nav>
    );
}


HomeNav.propTypes = {
    className: PropTypes.string,
};
HomeNav.defaultProps = {
    className: ''
};


export default HomeNav
