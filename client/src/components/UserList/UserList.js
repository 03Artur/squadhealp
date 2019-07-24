/*
* React 
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Styles
* */
import styles from './UserList.module.scss';

const UserList = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};
UserList.propTypes = {};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
