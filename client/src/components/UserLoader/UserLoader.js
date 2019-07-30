/*
* React
* */
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {getAuthorizedUserActionCreator} from '../../actions/authorizationActionCreators'
/*
* Components
* */


/*
* UTILS
* */

import {LOCAL_STORAGE_KEYS} from "../../constants";

const UserLoader = (props) => {

    useEffect(() => {
        console.group('UserLoader useEffect: ');
        if (!props.user && localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY)) {
            console.log("нет пользователя и есть токен доступа в локальном хранилище");
            props.getAuthorizedUser()
        }
        console.groupEnd();
    },[props.user]);

    return (
        props.children
    )
};


const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user};
};
const mapDispatchToProps = dispatch => ({
        getAuthorizedUser: () => dispatch(getAuthorizedUserActionCreator())
    })
;

export default connect(mapStateToProps, mapDispatchToProps)(UserLoader)
