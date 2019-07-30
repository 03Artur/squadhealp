/*
* React
* */
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom'

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* UTILS
* */
import {PATH, ROLE} from '../../constants'


const PrivateRoute = ({roles, path, component: Component, redirectTo, ...props}) => {


    const render = (props) => {
        if (!props.user && !roles.includes(props.user.role)) {
            return (<Redirect to={redirectTo}/>)
        } else {
            return (<Route path={path} {...props} render={props.render}/>)
        }
    };
    return (
        render()
    )
};

PrivateRoute.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.oneOf(Object.values(ROLE))).isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.node,
    redirectTo: PropTypes.string,
    render: PropTypes.func,

};
PrivateRoute.defaultProps = {
    redirectTo: PATH.HOME,
};


/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user}
};


export default connect(mapStateToProps)(PrivateRoute)
