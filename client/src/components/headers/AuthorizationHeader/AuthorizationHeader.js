
/*
* REACT
* */
import React from 'react';
import PropTypes from 'prop-types';
/*
* COMPONENTS
* */
import Logo from '../../Logo/Logo';
import LinkButton from "./LinkButtun/LinkButton";
/*
* UTILS
* */
import {AUTHORIZATION_MODE} from "../../../constants";
import PATH from "../../../constants/paths";
/*
* STYLES
* */
import styles from './AuthorizationHeader.module.scss';



export default function AuthorizationHeader({mode, ...props}) {

    const getSetting = () => {
        switch (mode) {
            case AUTHORIZATION_MODE.SIGN_UP_MODE:
                return {
                    linkTo: PATH.LOGIN,
                    linkTitle: 'Login',
                };
            case AUTHORIZATION_MODE.LOGIN_MODE:
                return {
                    linkTo: PATH.SIGN_UP,
                    linkTitle: 'Signup',
                };
            default:
                return {
                    linkTo: PATH.HOME,
                    linkTitle: 'Home',
                }
        }
    };

    const settings = getSetting();

    return (
        <header className={styles.header}>
            <Logo isColor={false}/>
            <LinkButton to={settings.linkTo} toTitle={settings.linkTitle}/>
        </header>
    );

}

AuthorizationHeader.propTypes = {
    mode: PropTypes.oneOf(Object.values(AUTHORIZATION_MODE)),
};

