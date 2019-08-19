import React from 'react';
import PropTypes from 'prop-types';
import {ICON_IMAGES_URL} from "../../../../../api/baseURL";
import styles from './Icon.module.scss'

export default function Icon(props) {
    const {icon} = props;
    return (
        <img className={styles.icon} src={`${ICON_IMAGES_URL}/${icon}`} alt="icon"/>
    )
}

Icon.propTypes = {
    icon: PropTypes.string,
};

Icon.defaultProps = {

};

