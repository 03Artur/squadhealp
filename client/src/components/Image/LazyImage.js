import React, {Component, Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import {loadImage} from "../../utils/image";
import {FadeLoader} from 'react-spinners'
import {mdiAlertCircleOutline} from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';


const LazyImage = (props) => {
    const {src, className, alt} = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setIsLoaded(true);

        };
        image.onerror = () => {
            setIsError(true)
        };
        image.src = src;
    }, []);

    const renderImg = () => {
        return (
            <img src={src} className={className} alt={alt}/>
        );
    };
    const renderLoading = () => {
        return (
            <div className={className}>
                <FadeLoader width={5} height={10}/>
            </div>
        )
    };
    const renderError = () => {
        return (
            <div className={classNames(styles.errorIconContainer, className)}>
                <Icon path={mdiAlertCircleOutline} color={'gray'} className={styles.errorIcon}/>
            </div>
        )
    };

    if (isError) {
        return renderError();
    } else if (!isLoaded) {
        return renderLoading();
    }
    return renderImg();

};

LazyImage.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

LazyImage.defaultProps = {};


export default LazyImage;
