/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


import {connect} from 'react-redux';

/*
* Components
* */


/*
* styles
* */
import styles from './MenuLogo.module.scss';

/*
* UTILS
* */


const MenuLogo = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

MenuLogo.propTypes = {

    className: PropTypes.string,

};

MenuLogo.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => {
    const {isOpen} = store.affiliateDashboardMenu;
    return {
        isOpen,
    }
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MenuLogo)
