import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {closeOpenAffiliateDashboardMenuActionCreator} from "../../../../actions/actionCreators/menusActionCreators/menusActionCreators";
import myStyles from './MenuButton.module.scss'

function MenuButton(props) {

    const menuCloseOpenHandler = () => {
        props.closeOpenMenuAction(!props.isOpen)
    };

    return (
        <span className={myStyles.containerMenuButton}  onClick={menuCloseOpenHandler}>
            <FontAwesomeIcon className={myStyles.burgerIcon} icon={faBars}/>
        </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton)
