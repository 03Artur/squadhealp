import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import {connect} from 'react-redux';
import {closeOpenAffiliateDashboardMenuActionCreator} from "../../../actions/actionCreators/menusActionCreators/menusActionCreators";
import classNames from 'classnames';
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

function Menu(props) {

    const {isOpen} = props;
    const getMenuContainerClasses = () => {
        return classNames(styles.menuContainer, {[styles.menuContainerOpen]: isOpen});
    };

    return (
        <React.Fragment>
            <div className={getMenuContainerClasses()}>
                <Logo/>
                <Nav/>
            </div>
            <div onClick={props.closeMenuAction} className={isOpen ? styles.closeMobile : ''}/>
        </React.Fragment>
    )
}

Menu.propTypes = {
    isOpen: PropTypes.bool,
};

Menu.defaulProps = {
    isOpen: false,
};

function mapStateToProps(state) {
    return state.affiliateDashboardMenu;
}

function mapDispatchToProps(dispatch) {
    return {
        closeMenuAction: () => dispatch(closeOpenAffiliateDashboardMenuActionCreator(false))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);



