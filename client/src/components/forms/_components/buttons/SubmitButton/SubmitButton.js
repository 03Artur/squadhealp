import React from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitButton.module.scss';

const SubmitButton = props => {

    const classNames = [styles.container, props.className];

    if (!props.isEnable) {
        classNames.push(styles.disable);
    }
    const classNamesJoinedString = classNames.join(' ');
    const getOnClick = (e) => {

        if (props.isEnable) {
            return props.onClick;
        }
    };
    return (
        <div onClick={getOnClick()} className={classNamesJoinedString}>{
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
    isEnable: PropTypes.bool,

};

SubmitButton.defaultProps = {
    /*
        text: 'Button',
    */
    className: '',
    onClick: function () {
    },
    children: 'Button',
    isEnable: true,

};

export default SubmitButton;