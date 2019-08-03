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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

/*
* tyles
* */
import styles from './Menu.scss';
import Logo from "../../Logo/Logo";

/*
* UTILS
* */


const Menu = (props) => {


    const renderNav = () => {
        if (props.user) {

        } else {

        }
    }

    return (
        <Fragment>
            <FontAwesomeIcon icon={faBars}/>

        </Fragment>
    )
};

Menu.propTypes = {};

Menu.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorization;
    return user;
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
