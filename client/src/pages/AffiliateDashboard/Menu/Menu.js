import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';


function Menu(props) {


    const containerClasses = [styles.container, props.isOpen ? styles.containerOpen : ''].join(' ');

    return (
        <div className={containerClasses}>

        </div>
    )
}

Menu.propTypes = {
    isOpen: PropTypes.bool,
};

Menu.defaulProps = {
    isOpen: false,
};

export default Menu;



