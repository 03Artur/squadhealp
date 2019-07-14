import styles from './InputText.module.sass';
import React from 'react';
import PropTypes from 'prop-types';

export default function InputText(props) {

    const getStyles = () => {

        const combinedStyles = [
            styles.defaultState,
        ];

        return combinedStyles.join(' ');

    };


    return (
        <input className={getStyles()} required={props.required} pattern={props.pattern} type={props.isPassword?"password":'text'}></input>
    );
}

InputText.propTypes = {
    isPassword: PropTypes.bool,
    placeholder: PropTypes.string,
    onchange: PropTypes.func,
    required: PropTypes.bool,
    pattern: PropTypes.instanceOf(RegExp),
};

InputText.defaultProps = {
    isPassword: false,
    placeholder: '',
    onchange: null,
    required: false,
    pattern: null,
};