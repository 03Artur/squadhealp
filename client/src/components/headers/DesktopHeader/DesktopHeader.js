import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Navigation from "./Navigation/Navigation";
import styles from './DesktopHeader.module.scss';
import HomeNavigation from "../../navigations/HomeNavigation/HomeNavigation";
import ContactDetails from "./ContactiDetails/ContactDetails";

const DesktopHeader = (props) => {

    return (
        <Fragment>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.contactDetails}>
                            <ContactDetails/>
                        </div>
                    </div>
                    <div className={[styles.col,styles.navContainer].join(' ')}>
                        <Navigation/>
                    </div>
                </div>

            </div>
        </header>
            <div className={styles.container}>
            <HomeNavigation/>
            </div>
        </Fragment>
    )
};

DesktopHeader.propTypes = {};

DesktopHeader.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader)
