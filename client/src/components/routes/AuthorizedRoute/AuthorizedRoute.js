/*
* React
* */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom'

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* UTILS
* */
import {PATH, ROLE} from '../../../constants'


const AuthorizedRoute = ({redirectTo, user, ...props}) => {

    const render = () => {
        if (user) {
            return (<Route   {...props}/>)

        } else {
            return <Redirect to={redirectTo}/>
        }
    };

    return render();


};

AuthorizedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.node,
    redirectTo: PropTypes.string,
    render: PropTypes.func,

};
AuthorizedRoute.defaultProps = {
    redirectTo: PATH.HOME,
};


/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user}
};


export default connect(mapStateToProps)(AuthorizedRoute)
