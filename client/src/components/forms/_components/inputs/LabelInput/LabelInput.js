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


const LabelInput = ({input, meta, placeholder, tip, ...props}) => {

    const renderTip = () => {
        return (
            <div className={[styles.tip, meta.active ? styles.tipVisible : undefined].join(' ')}>
                <h3>{tip.title}</h3>
                <div className={styles.tipText}>{tip.text}</div>
                <div className={styles.arrow}/>
            </div>
        );
    };

    const renderErrorTip = () => {
        if (meta.touched && meta.error) {
            return (
                <div className={styles.errorTipContainer}>
                    {
                        meta.error
                    }
                </div>
            );
        }
    };

    return (
        <div className={styles.container}>
            {
                renderTip()
            }

            <label className={styles.label}>
                <span className={styles.title}>
                {
                    props.label
                }
                </span>
                <br/>
                <input placeholder={placeholder} {...input} className={styles.input}/>
                {
                    renderErrorTip()
                }
            </label>
        </div>
    )
};

LabelInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    tip: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
};

LabelInput.defaultProps = {
    tip: {
        title: 'Tip Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
};

/*
* React redux
* */

export default LabelInput;
