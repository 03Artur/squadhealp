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


function AuthorizationHeader(props) {

    return (
        <header className={styles.header}>
            <div className={styles.headerRow}>
                <Logo isColor={false}/>
                <LinkButton/>
            </div>
        </header>
    );
}




export default AuthorizationHeader

