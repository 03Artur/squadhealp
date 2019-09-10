
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Users.module.scss';


const Users = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

Users.propTypes = {
    className: PropTypes.string,
};

Users.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Users)
