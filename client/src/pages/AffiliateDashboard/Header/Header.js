import React from 'react';
import styles from './Header.module.scss'
import UserItem from "./UserItem/UserItem";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {closeOpenAffiliateDashboardMenuActionCreator} from "../../../actions/actionCreators/menusActionCreators/menusActionCreators";

function Header(props) {

    const menuCloseOpenHandler = () => {
        props.closeOpenMenuAction(!props.isOpen)
    };

    return (
        <React.Fragment>
            <div onClick={menuCloseOpenHandler} className={styles.menuIconContainer}>
                <FontAwesomeIcon className={styles.burgerIcon} icon={faBars}/>
            </div>
            <div className={styles.userItemContainer}>
                <UserItem/>
            </div>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    const {isOpen} = state.affiliateDashboardMenu;
    return {
        isOpen,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        closeOpenMenuAction: isOpen => dispatch(closeOpenAffiliateDashboardMenuActionCreator(isOpen))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
