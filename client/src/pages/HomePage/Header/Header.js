import React from 'react';
import {connect} from 'react-redux';
import styles from './Header.module.scss';
import HomeNav from "./nav/HomeNav/HomeNav";
import AuthorizationNav from "./nav/AuthorizationNav/AuthorizationNav";
import ContactPhone from "./nav/ContactPhone/ContactPhone";
import Logo from "../../../components/Logo/Logo";
import HomeNavMenu from "./nav/HomeNav/HomeNavMenu/HomeNavMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";


function Header(props) {

    return (
        <React.Fragment>
            <header>
                <div className={styles.topRow}>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <div className={styles.contactPhoneContainer}>
                                    <ContactPhone/>
                                </div>
                                <div className={styles.logoContainer}>
                                    <Logo/>
                                </div>
                            </div>
                            <div className={[styles.col, styles.leftCol].join(' ')}>
                                <AuthorizationNav/>
                                <label htmlFor={'menuBurger'} className={styles.burgerContainer}>
                                    <FontAwesomeIcon icon={faBars}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <input id={'menuBurger'} type="checkbox" style={{display: 'none'}}/>
                    <HomeNavMenu className={styles.menuContainer}/>
                </div>
                <div className={styles.nav}>
                    <HomeNav/>
                </div>
            </header>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    const {user} = state.authorization;

    return {
        user,
    }
}

function mapDispatchToProps(dispatch) {

    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
