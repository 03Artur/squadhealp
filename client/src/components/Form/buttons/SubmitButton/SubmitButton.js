import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitButton.module.scss';

const SubmitButton = props => {

    const classNames = [styles.container].join(' ');

    return (
        <div onClick={props.onClick} className={classNames}>{
            props.children
        }</div>
    );
};

SubmitButton.propTypes = {
/*
    text: PropTypes.string,
*/
    className: PropTypes.string,
    onClick: PropTypes.func,
};

SubmitButton.defaultProps = {
/*
    text: 'Button',
*/
    className: '',
    onClick: function () {
    },
    children: 'Button',
};

export default  SubmitButton;