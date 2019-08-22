import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import {connect} from 'react-redux';

function Menu(props) {

    const {isOpen} = props;
    const getMenuContainerClasses = () => {
        return [styles.menuContainer, isOpen ? styles.menuContainerOpen : ''].join(' ');
    };

    return (
        <div className={getMenuContainerClasses()}>

        </div>
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

export default connect(mapStateToProps)(Menu);



