
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Input.module.scss';
import classNames from 'classnames';

const Input = (props) => {
    const {input,title} = props;

    return (
        <label className={classNames(styles.container, {[styles.checked]: input.checked})}>
            <div className={styles.checkbox}>
                <span className={styles.checkMark}/>
            </div>
            <span className={styles.title}>
                {title}
            </span>
            <input {...input} style={{display: 'none'}}/>
        </label>
    )
};

Input.propTypes = {
    className: PropTypes.string,
};

Input.defaultProps = {

};

export default Input
