/*
* REACT
* */
import React from 'react';
/*
* REDUX & FRIENDS
* */
import {connect} from 'react-redux'
/*
* COMPONENTS
* */
import Logo from '../../Logo/Logo';
import LinkButton from "../LinkButtun/LinkButton";

/*
* STYLES
* */
import styles from './AuthorizationHeader.module.scss';
/*
* UTILS
* */


function AuthorizationHeader({linkButton,...props}) {

    return (
        <header className={styles.header}>
            <div className={styles.headerRow}>
                <Logo isColor={false}/>
                <LinkButton to={linkButton.to}>{linkButton.text}</LinkButton>
            </div>
        </header>
    );
}


const mapStateToProps = state => {
    const {linkButton} = state.authorizationMode;
    return {linkButton};
};


export default connect(mapStateToProps)(AuthorizationHeader);



