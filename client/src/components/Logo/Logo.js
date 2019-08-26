import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {imagesURL,} from "../../api/baseURL"
import styles from './Logo.module.scss'


export default function Logo(props) {

    const settings = props.isColor ?
        {
            logoSrc: `${imagesURL}/logo/logoColor.jpg`,
        }
        :
        {
            logoSrc: `${imagesURL}/logo/logo.png`,
        };

    return (
        <Link className={props.className} style={{display: 'inline-block', maxWidth:'100%',}} to='/'>
            <img src={settings.logoSrc} style={{maxWidth: '100%'}} alt="Logo"/>
        </Link>
    )
};


Logo.propTypes = {
    className: PropTypes.string,
    isColor: PropTypes.bool,
};

Logo.defaultProps = {
    isColor: true,
    className: '',
};


