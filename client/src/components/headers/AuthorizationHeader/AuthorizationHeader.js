/*
* REACT
* */
import React from 'react';
/*
* REDUX & FRIENDS
* */
import {connect} from 'react-redux'
import {modeActionCreator} from '../../../actions/authorizationActionCreators';

/*
* COMPONENTS
* */
import Logo from '../../Logo/Logo';
import LinkButton from "./LinkButtun/LinkButton";

/*
* STYLES
* */
import styles from './AuthorizationHeader.module.scss';
/*
* UTILS
* */
import PATH from './../../../constants/paths'


function AuthorizationHeader(props) {

    const settings =(
        props.isLoginMode ? {
                to: PATH.SIGN_UP,
                linkTitle: 'Sign Up',
            }
            :
            {
                to: PATH.LOGIN,
                linkTitle: 'Login',
            });

    return (
        <header className={styles.header}>
            <div className={styles.headerRow}>
                <Logo isColor={false}/>
                <LinkButton to={settings.to} text={settings.linkTitle}/>
            </div>
        </header>
    );

}




export default AuthorizationHeader

