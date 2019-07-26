/*
* React
* */
import React from 'react';
import PropTypes from 'prop-types';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faTimesCircle} from '@fortawesome/free-regular-svg-icons';

/*
* Styles
* */
import styles from './Error.module.scss';

const Error = ({message, ...props}) => {

    const classNamesCombineString = [styles.container, props.className].join(' ');
    return (

        <div className={styles.container}><span>{
            message
        }</span>
        <FontAwesomeIcon onClick={props.onClick} className={styles.closeIcon} icon = {faTimesCircle}/>
        </div>

    )
};

Error.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Error.defaultPros = {
    message: 'Error: something went wrong!',
    className: "",
    onClick: function () {},

};

export default Error
