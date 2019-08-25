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


const Select = ({options, input, meta, label, ...props}) => {

    const renderTip = () => {
        if (meta.active) {
            return (
                <div className={styles.tip}>
                    <h3>Tip Title</h3>
                    <div className={styles.tipText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className={styles.arrow}/>
                </div>
            );
        }
    };

    const renderOptions = () => {
        return options.map((item) => (<option key={item}>{item}</option>));
    };

    return (
        <div className={styles.container}>
            <label className={[styles.label].join(' ')}>
                {label}
            </label>
            {
                renderTip()
            }
            <select placeholder={'test'} {...input} className={styles.input}>
                <option value={''} disabled selected>Select your business type</option>
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

Select.defaultProps = {
    options: [],
};


export default Select
