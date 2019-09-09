import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './UniversalButton.module.scss';


const UniversalButton = (props) => {

    const {onClick, children, className} = props;

    return (
        <div className={className} onClick={onClick}>
            {
                children
            }
        </div>
    )
};

UniversalButton.propTypes = {

    className: PropTypes.string,
    onClick: PropTypes.func,

};

UniversalButton.defaultProps = {
    children: 'Button'
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UniversalButton)
