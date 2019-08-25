import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux';
import styles from './HomeFooter.module.scss';
import Logo from "../../Logo/Logo";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import {faFacebookF, faGooglePlusG, faTwitter} from "@fortawesome/free-brands-svg-icons";


const HomeFooter = (props) => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.logo} >
                    <Logo isColor={false}/>
                </div>
                <div className={styles.copyRight}>Copyright &copy; 2018 Squadhelp Inc</div>
                <div className={styles.contacts}>
                    <a href="#" className={styles.contactItem}>
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a href="#" className={styles.contactItem}>
                        <FontAwesomeIcon icon={faGooglePlusG}/>
                    </a>
                    <a href="#" className={styles.contactItem}>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)


HomeFooter.propTypes = {};

HomeFooter.defaultProps = {};


export default HomeFooter;
