/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
/*
* Styles
* */
import styles from './UserIcon.module.scss';
import {defaultUserIcon, imagesURL, userPicturesURL, defaultUserIconMin} from "../../../../../api/baseURL";

const UserIcon = (props) => {


    const containerSize = {
        height: `${props.size}px`,
        width: `${props.size}px`,
    };
    const imgSize = {
        width: `${props.size}px`,
    };
    return (
        <div style={containerSize} className={styles.container}>
            <img style={imgSize} src={props.src} alt={'(0_0)'} className={styles.userIcon}/>
        </div>
    )
};

UserIcon.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number,
};

UserIcon.defaultProps = {
    src: defaultUserIconMin,
    size: 20,
};

/*
* React redux
* */

export default UserIcon;
