import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import styles from './Nav.module.scss'

function Nav(props) {

    useEffect(() => {



    },[])



    return (
        <React.Fragment>

        </React.Fragment>
    );
}


function mapStateToProps(state) {
    const {user} = state.authorizationReducer;
    return {
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

