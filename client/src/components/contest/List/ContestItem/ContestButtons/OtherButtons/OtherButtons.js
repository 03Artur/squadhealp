
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './OtherButtons.module.scss';


const OtherButtons = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

OtherButtons.propTypes = {
    className: PropTypes.string,
};

OtherButtons.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OtherButtons)
