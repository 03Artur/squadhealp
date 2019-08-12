/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


/*
* Components
* */


/*
* styles
* */
import styles from '../../../_components/inputs/LabelInput/LabelInput.module.scss';

/*
* UTILS
* */


const Select = ({options, input, label, ...props}) => {


    const renderOptions = () => {

        return options.map(item => (<option key={item}>{item}</option>))

    };

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <select {...input} className={styles.input}>
                {
                    renderOptions()
                }
            </select>
        </div>
    )
};

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string,
};

Select.defaultPros = {
    options: [],
};


export default Select
