/*
* React
* */
import React, {Component, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {getNavigationActionCreator} from '../../../actions/authorizationActionCreators'
/*
* Components
* */


/*
* Styles
* */
import styles from './MobileHeader.module.scss';
import Logo from "../../Logo/Logo";
import {ROLE} from "../../../constants";

/*
* UTILS
* */


const MobileHeader = ({user, ...props}) => {

    useEffect(() => {
        const role = user ? user.role : null;
        props.getNavigation(role)
    }, [props.user]);


    return (
        <Fragment>
            <header className={styles.container}>
                <Logo/>
            </header>

        </Fragment>
    )
};

MobileHeader.propTypes = {};

MobileHeader.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorization;
    return user;
};
const mapDispatchToProps = dispatch => ({
    getNavigation: role => dispatch(getNavigationActionCreator(role))
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader)
