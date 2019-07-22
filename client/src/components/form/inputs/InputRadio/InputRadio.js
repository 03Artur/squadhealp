/*
* REACT
* */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
/*
* STYLES
* */
import styles from './InputRadio.module.scss';


export default function InputRadio({input, type, meta: {touched, visited, error, warning}, ...props}) {


    return (
        <div  className={styles.container}>
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
            <input className={styles.inputRadio} id = {props.id} {...input} type="radio"/>


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