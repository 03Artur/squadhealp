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
    const getContainerStyle = () => {
        return {
            height: props.size + 'px',
            width: props.size + 'px',
            borderRadius: '100%',
            overflow: 'hidden',
        }
    };
    const renderContent = () => {

        try {
            loadImage(`${userPicturesURL}/${src}`).then(data => {
                    return data;
                }
            ).catch(err => {
                return renderInitials()
            });

        } catch (e) {
            return renderInitials();
        }
    };
    return (
        <div>
            <div style={getContainerStyle()}>
                {
                    renderInitials()
                }
            </div>
        </div>
    )
};

AuthorIcon.propTypes = {
    src: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    size: PropTypes.number,
};

AuthorIcon.defaultProps = {
    size: 42,
};


export default AuthorIcon
