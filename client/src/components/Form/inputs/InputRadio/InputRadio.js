/*
* REACT
* */
import React from 'react';
import PropTypes from 'prop-types';
/*
* STYLES
* */
import styles from './InputRadio.module.scss';


export default function InputRadio({input, type, meta, ...props}) {

    return (
        <div className={styles.container}>
            <label className={styles.title} htmlFor={props.id}>
                {
                    props.title
                }
                <span>
                    {
                        props.description
                    }
                </span>
            </label>
            <input type={type} className={styles.inputRadio} id={props.id} {...input}/>
        </div>
    );
}

InputRadio.propTypes = {

    title: PropTypes.string,
    description: PropTypes.string,
};

InputRadio.defaultProps = {

    title: "Title",
    description: "Description",

};