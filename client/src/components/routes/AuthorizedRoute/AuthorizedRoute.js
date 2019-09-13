import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {PATHS} from '../../../constants'

const AuthorizedRoute = ({redirectTo, user, ...props}) => {

    if (user) {
        return (<Route   {...props}/>)
    } else {
        return <Redirect to={redirectTo}/>
    }
};

AuthorizedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.node,
    redirectTo: PropTypes.string,
    render: PropTypes.func,

};
AuthorizedRoute.defaultProps = {
    redirectTo: PATHS.HOME,
};

const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user}
};

export default connect(mapStateToProps)(AuthorizedRoute)
