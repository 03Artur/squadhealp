import React from 'react';
import {connect} from 'react-redux';
import styles from './Header.module.scss';
import HomeNav from "./nav/HomeNav/HomeNav";
import {PATHS, PHONE_NUMBER} from "../../../constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import UserItem from "./UserItem/UserItem";
import {Link} from 'react-router-dom';
import AuthorizationNav from "./nav/AuthorizationNav/AuthorizationNav";


class Header extends React.Component {




    render() {
        return (
            <React.Fragment>
                <header>
                    <div className={styles.topRow}>
                        <div className={styles.container}>
                            <div className={styles.row}>
                                <div className={styles.col}>
                                    <div className={styles.contactPhone}>
                                        <FontAwesomeIcon className={styles.icon} icon={faPhone}/>
                                        <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                                    </div>
                                </div>
                                <div className={[styles.col, styles.leftCol].join(' ')}>
                                    <AuthorizationNav/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <HomeNav/>
                    </div>
                </header>
            </React.Fragment>
        );
    }
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
