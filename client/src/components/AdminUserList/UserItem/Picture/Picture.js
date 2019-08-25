/*
* React
* */
import React from 'react';
import PropTypes from 'prop-types';


/*
* Styles
* */
import styles from './Picture.module.scss';

/*
*Utils
* */
import {defaultUserIcon, userPicturesURL} from '../../../../api/baseURL'

const Picture = (props) => {

    const srcUrl = props.src ? `${userPicturesURL}/${props.src}` : defaultUserIcon;
    const classNamesCombineString = [styles.container, styles.picture].join(' ');
    return (
        <img className={classNamesCombineString} src={srcUrl} alt={'(0_0)'}/>
    )
};

Picture.propTypes = {
    src: PropTypes.string,
};
Picture.defaultProps = {
    src: null,
};

export default Picture;

