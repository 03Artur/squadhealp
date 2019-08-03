/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import Navigation from "./Navigation/Navigation";
/*
* Styles
* */
import styles from './DesktopHeader.module.scss';

/*
* UTILS
* */
import {PHONE_NUMBER} from "../../../constants";
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
