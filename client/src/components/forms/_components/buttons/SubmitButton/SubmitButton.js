import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitButton.module.scss';
import classNames from 'classnames';

const SubmitButton = props => {
    const {isEnable} =props;
    const classNamesJoinedString = classNames(styles.container, props.className,{[styles.disable]:!isEnable});

    const onClick = (e) => {
        if (isEnable) {
            props.onClick();
        }
    };

    return (
        <div onClick={onClick} className={classNamesJoinedString}>{
            props.children
        }</div>
    );
};

SubmitButton.propTypes = {

    className: PropTypes.string,
    onClick: PropTypes.func,
    isEnable: PropTypes.bool,

};

SubmitButton.defaultProps = {

    className: '',
    onClick: function () {
    },
    children: 'Button',
    isEnable: true,

};

export default SubmitButton;