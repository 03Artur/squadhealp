
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './RejectButton.module.scss';


const RejectButton = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

RejectButton.propTypes = {
    className: PropTypes.string,
};

RejectButton.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RejectButton)
