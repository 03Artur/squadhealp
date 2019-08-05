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
import {PATH,  ROLE} from '../../../constants'


const AccessRoute = ({roles, redirectTo, user, ...props}) => {

    const render = () => {
        if (user && roles.includes(user.role)) {
            return (<Route   {...props}/>)

        } else {
            return <Redirect to={redirectTo}/>
        }
    };

    return render();


};

AccessRoute.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.oneOf(Object.values(ROLE))).isRequired,
    path: PropTypes.string.isRequired,
    component: PropTypes.node,
    redirectTo: PropTypes.string,
    render: PropTypes.func,

};
AccessRoute.defaultProps = {
    redirectTo: PATH.HOME,
};


/*
* React redux
* */
const mapStateToProps = store => {
    const {user} = store.authorization;
    return {user}
};


export default connect(mapStateToProps)(AccessRoute)
