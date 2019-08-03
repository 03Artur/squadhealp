/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
/*
* Styles
* */
import styles from './UserIcon.module.scss';
import {defaultUserIcon, imagesURL, userPicturesURL, defaultUserIconMin} from "../../../../api/baseURL";

const UserIcon = (props) => {
    const getSrc = () => {
        return props.src? `${userPicturesURL}/${props.src}`:defaultUserIconMin
    };
    const classNameCombineString = [styles.userIcon, props.className].join(' ');
    return (
        <img src={getSrc()} alt={'(0_0)'} className={classNameCombineString}/>
    )
};

UserIcon.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
};

UserIcon.defaultPros = {
    src: defaultUserIcon,

};

/*
* React redux
* */

export default UserIcon;
