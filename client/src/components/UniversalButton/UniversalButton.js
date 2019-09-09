import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './UniversalButton.module.scss';


const UniversalButton = (props) => {

    const {onClick, children, isEnable, className} = props;

    const clickHandler = () => {
        if (isEnable) {
            onClick();
        }
    };

    return (
        <div className={clickHandler} onClick={onClick}>
            {
                children
            }
        </div>
    )
};

UniversalButton.propTypes = {

    className: PropTypes.string,
    onClick: PropTypes.func,
    isEnable: PropTypes.bool,

};

UniversalButton.defaultProps = {
    children: 'Button',
    isEnable: true,
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UniversalButton)
