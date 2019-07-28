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
* UTILS
* */
import {PATH} from '../../constants'


const PrivateRoute = (props) => {

    if(!props.user){
        props.history.push(PATH.LOGIN)
    }

    return (
        <Fragment>{
            props.children
        }</Fragment>
    )
};


/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user}
};


export default connect(mapStateToProps)(PrivateRoute)
