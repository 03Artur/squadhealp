/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */


/*
* Styles
* */
import styles from './DropDownMenu.module.scss';

const DropDownMenu = (props) => {

    const renderItems = () => {
        return props.items.map(item => (<li className={styles.menuItem} onClick={item.onClick}> <span>{item.text}</span></li>))
    };

    return (
        <ul className={styles.container}>
            {
                renderItems()
            }
        </ul>
    )
};

DropDownMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    })),
};

DropDownMenu.defaultPros = {
    items: [],
};

/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user};
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu)
