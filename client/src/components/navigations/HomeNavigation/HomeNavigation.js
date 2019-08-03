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
import LinkButton from "../../headers/LinkButtun/LinkButton";
/*
* Styles
* */
import styles from './HomeNavigation.module.scss';
import {PATH} from "../../../constants";

/*
* UTILS
* */


const HomeNavigation = (props) => {

    const combinedClassNamesString = [styles.container, props.className].join(' ');

    return (
        <nav className={combinedClassNamesString}>
            <Logo isColor={true}/>
            <LinkButton className={styles.linkButton} to={PATH.START_CONTEST}>Start Contest</LinkButton>
        </nav>
    )
};

HomeNavigation.propTypes = {
    className: PropTypes.string,
};

HomeNavigation.defaultPros = {
    className: '',
};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation)
