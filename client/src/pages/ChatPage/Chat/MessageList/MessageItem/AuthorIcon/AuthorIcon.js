/*
* React
* */
import React, {Component, Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';


import styles from './AuthorIcon.module.scss';
import {userPicturesURL} from "../../../../../../api/apiPaths";
import {stringToHslColor} from "../../../../../../utils/color";
import {loadImage} from "../../../../../../utils/image";

/*const f = async () => {
    try{
        let result = await loadImage(`${userPicturesURL}/${src}`);
        setImg(result);
    }
    catch (e) {

    }

}*/
const AuthorIcon = ({firstName, lastName, src, ...props}) => {

    const [img, setImg] = useState(null);
    useEffect(() => {
        if (src) {
            loadImage(`${userPicturesURL}/${src}`).then(result => {
                setImg(result);
            }).catch(error => {

            });
        }
    }, []);

    const renderInitials = () => {
        const backgroundColor = stringToHslColor(`${firstName} ${lastName}`);
        return (
            <div style={{backgroundColor,}} className={styles.altContent}>
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
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    };
    const renderContent = () => {
        if (img) {
            const imgStyle = {
                [`${img.height > img.width ? 'width' : 'height'}`]: props.size + 'px',
            };
            return <img src={img.src} style={imgStyle} alt={`${firstName} ${lastName}`}/>;
        } else {
            return renderInitials();
        }
    };
    return (
        <div>
            <div style={getContainerStyle()}>
                {
                    renderContent()
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
