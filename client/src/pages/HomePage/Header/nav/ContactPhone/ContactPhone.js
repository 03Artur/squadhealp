import React from 'react';
import {connect} from 'react-redux';
import {PHONE_NUMBER} from "../../../../../constants";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import styles from './ContactPhone.module.scss';

function ContactPhone(props) {
    return (

        <div className={styles.contactPhone}>
            <FontAwesomeIcon className={styles.icon} icon={faPhone}/>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </div>
    );
}


export default ContactPhone;








