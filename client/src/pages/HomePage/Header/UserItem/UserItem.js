/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import UserIcon from "./UserIcon/UserIcon";

/*
* Styles
* */
import styles from './UserItem.module.scss';
import {userPicturesURL} from "../../../../api/baseURL";

function UserItem(props) {

    const {user} = props;


    return (

        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <UserIcon src={`${userPicturesURL}/${user.profilePicture}` }/>
            </div>
            <span className={styles.greeting}>
                {
                    `Hi, ${user.firstName}`
                }
            </span>
        </div>

    );

}


UserItem.propTypes = {};

UserItem.defaultPros = {};


const mapStateToProps = store => {
    const {user} = store.authorizationReducer;
    return {user};
};


export default connect(mapStateToProps)(UserItem)
