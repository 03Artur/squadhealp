/*
* React
* */
import React, {Component, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';


import styles from './AuthorIcon.module.scss';
import {userPicturesURL} from "../../../../../../api/baseURL";
import {stringToHslColor} from "../../../../../../utils/color";
import {loadImage} from "../../../../../../utils/image";


const AuthorIcon = ({firstName, lastName, src, ...props}) => {

    const renderInitials = () => {
        return (
            <div style={{backgroundColor: stringToHslColor(`${firstName} ${lastName}`)}} className={styles.altContent}>
                <span>
                    {
                        firstName[0] + lastName[0]
                    }
                </span>
            </div>
        )
    };

    const renderContent = async () => {

        try {
            return await loadImage(`${userPicturesURL}/${src}`);
        } catch (e) {
            return renderInitials();
        }
    };
    return (
        <div className={styles.container}>
            {
                renderContent()
            }
        </div>
    )
};

AuthorIcon.propTypes = {
    src: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

AuthorIcon.defaultProps = {};


export default AuthorIcon
