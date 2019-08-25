/*
* React
* */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

/*
* COMPONENTS
* */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';

/*
* Styles
* */
import styles from './Error.module.scss';

const Error = ({message, ...props}) => {

    const classNamesCombineString = [styles.container, props.className].join(' ');

    return (
         (
            <div  className={styles.errorContainer}>

                <div className={classNamesCombineString}>
                    <span>{
                        message
                    }</span>
                    <FontAwesomeIcon onClick={props.onClick}  className={styles.closeIcon} icon={faTimesCircle}/>
                </div>
            </div>
        )
    )
};

Error.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,

};

Error.defaultProps = {
    message: 'Error: something went wrong!',
    className: "",
    onClick: function () {
    },

};

export default Error
