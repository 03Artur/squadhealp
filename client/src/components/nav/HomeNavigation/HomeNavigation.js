
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../../Logo/Logo'
import LinkButton from "../../headers/LinkButtun/LinkButton";
import styles from './HomeNavigation.module.scss';
import {PATHS,} from "../../../constants";



const HomeNavigation = (props) => {

    const combinedClassNamesString = [styles.container, props.className].join(' ');

    return (
        <nav className={combinedClassNamesString}>
            <Logo isColor={true}/>
            <LinkButton className={styles.linkButton} to={PATHS.SELECT_TASK_TYPE}>Start Contest</LinkButton>
        </nav>
    )
};

HomeNavigation.propTypes = {
    className: PropTypes.string,
};

HomeNavigation.defaultPros = {
    className: '',
};


export default HomeNavigation
