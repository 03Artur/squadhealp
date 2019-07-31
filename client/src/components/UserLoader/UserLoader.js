/*
* React
* */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {getAuthorizedUserActionCreator} from '../../actions/authorizationActionCreators'
/*
* Components
* */
import Spinner from '../Spinner/Spinner';

/*
* UTILS
* */

import {LOCAL_STORAGE_KEYS} from "../../constants";


import styles from './UserLoader.module.scss';


const UserLoader = (props) => {

    useEffect(() => {
        if (!props.user && localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY)) {
            props.getAuthorizedUser();
            console.log("нет пользователя и есть токен доступа в локальном хранилище");

        }
    },[]);


    const renderSpinner = () => (
        <div className={styles.spinnerContainer}>
            <Spinner/>
        </div>
    );

    const render = () => {
        if (props.isFetching || !props.user ) {
            return renderSpinner();
        } else {
            return props.children;
        }
    };


    return render();
};


const mapStateToProps = store => {
    return store.authorizationReducer;

};
const mapDispatchToProps = dispatch => ({
        getAuthorizedUser: () => dispatch(getAuthorizedUserActionCreator())
    })
;

export default connect(mapStateToProps, mapDispatchToProps)(UserLoader)
