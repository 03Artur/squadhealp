import React from 'react';
import {connect} from 'react-redux';

function AuthorizationNav(props) {

    const {user} = props;

    if (user) {

        return (
            <React.Fragment>

            </React.Fragment>
        )
    } else {

        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}


function mapStateToProps(state) {
    const {user} = state.authorization;

    return {
        user,
    }
}

export default connect(mapStateToProps)(AuthorizationNav)
