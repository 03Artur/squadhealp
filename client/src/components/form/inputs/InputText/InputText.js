import styles from './InputText.module.sass';
import React from 'react';
import PropTypes from 'prop-types';

export default function InputText(props) {

/*
    const [isValid, setIsValid] = useState(null);
*/

    /*    const getStyles = () => {

            const combinedStyles = [
                styles.defaultState,           ];
    /*
            if (isValid) {
                combinedStyles.push(styles.valid);
            } else if (isValid === false) {
                combinedStyles.push(styles.invalid);
            }
    */

/*        return combinedStyles.join(' ');
    };
    const onChangeValidation = (e) => {
        setIsValid(props.pattern.test(e.target.value));
    };*/

    return (
        <input
            placeholder={props.placeholder}
            required={props.required}
            pattern={props.pattern}
            type={props.isPassword ? "password" : 'text'}
        />
    );
}

InputText.propTypes = {
    isPassword: PropTypes.bool,
    placeholder: PropTypes.string,
    onchange: PropTypes.func,
    required: PropTypes.bool,
    pattern: PropTypes.string,

};

InputText.defaultProps = {
    isPassword: false,
    placeholder: '',
    onchange: null,
    required: false,
    pattern: null,
};