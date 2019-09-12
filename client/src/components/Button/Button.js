import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Button.module.scss';
import classNames from 'classnames';

const Button = (props) => {

    const {onClick, children, isEnable, className, disableClassName} = props;

    const clickHandler = () => {
        if (isEnable) {
            onClick();
        }
    };

    return (
        <div className={classNames(className, {[disableClassName]: !isEnable})} onClick={clickHandler}>
            {
                children
            }
        </div>
    )
};

Button.propTypes = {

    className: PropTypes.string,
    disableClassName: PropTypes.string,
    onClick: PropTypes.func,
    isEnable: PropTypes.bool,

};

Button.defaultProps = {
    children: 'Button',
    isEnable: true,
    className: '',
    disableClassName: '',

};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Button)
