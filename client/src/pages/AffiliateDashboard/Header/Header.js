import React from 'react';
import {connect} from 'react-redux';
import styles from './Header.module.scss'
import UserItem from "./UserItem/UserItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Header(props) {


    return (
        <React.Fragment>
            <header className={styles.header}>

                <div className={styles.menuIconContainer}>
                    <FontAwesomeIcon className={styles.burgerIcon} icon={faBars}/>
                </div>

                <div className={styles.userItemContainer}>
                    <UserItem/>
                </div>

            </header>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

