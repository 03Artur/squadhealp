import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {imagesURL,} from "../../api/baseURL"
import styles from './Logo.module.scss'


export default function Logo(props) {

    const settings = props.isColor ?
        {
            logoSrc: `${imagesURL}/logo/logoColor.jpg`,
            className: styles.colorLogo,
        }
        :
        {
            logoSrc: `${imagesURL}/logo/logo.png`,
            className: '',
        };

    return (
        <Link to='/'>
            <img className={settings.className} src={settings.logoSrc} alt="Logo"/>
        </Link>
    )
};


Logo.propTypes = {
    isColor: PropTypes.bool,
};

Logo.defaultProps = {
    isColor: true,
};


