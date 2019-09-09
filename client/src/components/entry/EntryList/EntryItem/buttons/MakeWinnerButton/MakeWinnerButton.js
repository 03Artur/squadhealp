import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './MakeWinnerButton.module.scss';


const MakeWinnerButton = (props) => {
    const {onClick, children, className} = props;

    return (
        <div className={className} onClick={onClick}>
            {
                children
            }
        </div>
    )
};

MakeWinnerButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

MakeWinnerButton.defaultProps = {
    children: 'Button',
};


export default MakeWinnerButton
