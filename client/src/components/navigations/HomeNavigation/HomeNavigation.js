/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import Logo from '../../Logo/Logo'

/*
* Styles
* */
import styles from './HomeNavigation.module.scss';
import {PATH} from "../../../constants";

/*
* UTILS
* */



const HomeNavigation = (props) => {


    return (
        <nav className={styles.container}>
            <Logo isColor={true}/>
            <Link to={PATH.START_CONTEST}>Start Contest</Link>
        </nav>
    )
};

HomeNavigation.propTypes = {

};

HomeNavigation.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation)
