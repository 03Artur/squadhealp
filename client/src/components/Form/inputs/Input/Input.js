import styles from './Input.module.sass';
import React from 'react';
import PropTypes from 'prop-types';

export default function Input({input, type, meta: {touched,visited, error, warning}, ...props}) {


    const inputClassNames = [styles.input, styles.inputField];
    const errorClassNames = [styles.error, styles.errorField];


    if (touched && error) {
        inputClassNames.push(styles.invalid);
    }else if(visited && ! error){
        inputClassNames.push(styles.valid)
    }


    const renderError = () => {
        if (touched && error) {
            return (
                <div className={joinedErrorClassNames}>{error}</div>
            );
        }
    };
    const joinedInputClassNames = inputClassNames.join(' ');
    const joinedErrorClassNames = errorClassNames.join(' ');


    return (
        <div className={styles.container}>
            <input {...input} className={joinedInputClassNames}
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