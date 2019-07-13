import styles from './InputText.module.sass';
import React from 'react';
import PropTypes from 'prop-types';

export default function InputText(props) {

    

    return (
        <input required={props.required} pattern={props.pattern} type={props.isPassword?'text':"password"}></input>
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

};