import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeNav.module.scss';
import Logo from "../../../../../components/Logo/Logo";
import LinkButton from "../../../../../components/headers/LinkButtun/LinkButton";
import {PATHS} from "../../../../../constants";
import HomeNavMenu from "./HomeNavMenu/HomeNavMenu";
import {connect} from 'react-redux';


function HomeNav(props) {

    const {navigation: {menu, link}} = props;

    return (
        <nav className={styles.nav}>
            <div className={styles.row}>
                <div className={styles.logoContainer}>
                    <Logo className={styles.logo}/>
                </div>
                <div className={styles.menuContainer}>
                    <HomeNavMenu menu={menu}/>
                </div>
                <div className={styles.buttonContainer}>
                    <LinkButton className={styles.linkButton} to={link.to}>{link.content}</LinkButton>
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

function mapStateToProps(state) {


    return {
        navigation: state.homeNav,
    }
}


export default connect(mapStateToProps)(HomeNav)
