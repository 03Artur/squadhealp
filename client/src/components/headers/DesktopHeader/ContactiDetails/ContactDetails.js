/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


/*COMPONENTS*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';


/*
* styles
* */
import styles from './Contactdetails.module.scss';
/*
* UTILS*/
import {PHONE_NUMBER} from "../../../../constants";


const ContactDetails = (props) => {


    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} icon={faPhone}/>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </div>
    )
};

ContactDetails.propTypes = {};

ContactDetails.defaultPros = {};


export default ContactDetails
