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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import UserItem from "./UserItem/Nav";
/*
* Styles
* */
import styles from './Header.module.scss';

/*
* UTILS
* */
import {PHONE_NUMBER} from "../../../constants";

const Header = (props) => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.contactDetails}>
                            <FontAwesomeIcon className={styles.icon} icon={faPhone}/>
                            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                        </div>
                    </div>
                    <div className={[styles.col,styles.userItemContainer].join(' ')}>
                        <UserItem/>
                    </div>
                </div>
            </div>
        </header>
    )
};

Header.propTypes = {};

Header.defaultPros = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
