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
import styles from './LabelInput.module.scss';

/*
* UTILS
* */


const LabelInput = ({input,meta,placeholder, ...props}) => {

    const renderTip = () => {
        if(meta.active){
            return (
                <div className={styles.tip}>
                    <h3>Tip Title</h3>
                    <div className={styles.tipText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className={styles.arrow}/>
                </div>
            );
        }
    };

    return (
        <div className={styles.container}>
            {
                renderTip()
            }
            <label className={styles.label} >{
                props.label
            }

            </label>
            <input placeholder={placeholder} {...input} className={styles.input}/>
        </div>
    )
};

LabelInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,

};

LabelInput.defaultPros = {};

/*
* React redux
* */

export default LabelInput;
