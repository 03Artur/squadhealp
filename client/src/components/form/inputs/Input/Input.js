import styles from './Input.module.sass';
import React from 'react';
import PropTypes from 'prop-types';

export default function Input({input,type, meta: {touched, error, warning}, ...props}) {


    const inputClassNames = [styles.input, styles.inputField];
    if(touched&&error){
        inputClassNames.push(styles.invalid);
    }

    const errorClassNamesString = [styles.error, styles.errorField].join(' ');




    const renderError = () => {
        if (touched && error) {

            return (
                <div className={errorClassNamesString}>{error}</div>
            );
        }
    };
    const inputClassNamesString = inputClassNames.join(' ');
    return (
        <div className={styles.container}>
            <input {...input} className={inputClassNamesString}
                   placeholder={props.placeholder}
                   required={props.required}
                   pattern={props.pattern}
                   type={type}/>
            {
                renderError()
            }

        </div>
    );
}

Input.propTypes = {
    isPassword: PropTypes.bool,
    placeholder: PropTypes.string,
    onchange: PropTypes.func,
    required: PropTypes.bool,
    pattern: PropTypes.string,
    type: PropTypes.string,

};

Input.defaultProps = {
    isPassword: false,
    placeholder: '',
    onchange: null,
    required: false,
    pattern: null,
    type: 'text',
};