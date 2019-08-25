import React from 'react';
import styles from './Header.module.scss'
import UserItem from "./UserItem/UserItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {closeOpenAffiliateDashboardMenuActionCreator} from "../../../actions/actionCreators/menusActionCreators/menusActionCreators";
import MenuButton from "./MenuButton/MenuButton";

function Header(props) {

    return (
        <div className={styles.header}>
            <MenuButton/>
            <UserItem/>
        </div>
    );
}


export default (Header)
