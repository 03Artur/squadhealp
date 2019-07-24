/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Styles
* */
import styles from './Picture.module.scss';

/*
*Utils
* */
import {imagesURL, userPicturesURL} from '../../../../api/baseURL'

const Picture = (props) => {


    return (
        <div className={styles.container}>
            <img className={styles.picture} src={`${userPicturesURL}/${props.src}`} alt={`${imagesURL}icons/user.svg`}/>
        </div>
    )
};

Picture.propTypes = {
    src: PropTypes.string,
};
Picture.defaultPros = {
    src: null,
};

export default Picture;

