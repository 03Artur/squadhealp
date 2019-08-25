import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import {connect} from 'react-redux';
import {closeOpenAffiliateDashboardMenuActionCreator} from "../../../actions/actionCreators/menusActionCreators/menusActionCreators";

function Menu(props) {

    const {isOpen} = props;
    const getMenuContainerClasses = () => {
        return [styles.menuContainer, isOpen ? styles.menuContainerOpen : ''].join(' ');
    };

    return (
        <React.Fragment>
            <div className={getMenuContainerClasses()}>


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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);



