import React from 'react';
import {connect} from 'react-redux';

function Header(props) {

    const {} = props;


    return (
        <React.Fragment>

        </React.Fragment>
    );
}


function mapStateToProps(state) {
    const {user} = state.authorization;

    return {
        user,
    }
}

function mapDispatchToProps(dispatch) {

   return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
