
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Template.module.scss';


const Template = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

Template.propTypes = {
    className: PropTypes.string,
};

Template.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Template)
