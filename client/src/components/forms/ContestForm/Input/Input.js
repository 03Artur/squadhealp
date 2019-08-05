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
* Components
* */


/*
* styles
* */
import styles from './Input.module.scss';

/*
* UTILS
* */


const Input = ({input,meta,placeholder, ...props}) => {


    return (
        <div className={styles.container}>
            <label className={styles.label} >{
                props.label
            }</label>
            <input placeholder={placeholder} {...input} className={styles.input}/>
        </div>
    )
};

Input.propTypes = {
    label: PropTypes.string,
};

Input.defaultPros = {};

/*
* React redux
* */

export default Input;
