import React from 'react';
import {connect} from 'react-redux';

import styles from './UserItem.module.scss'
import UserIcon from "../../../HomePage/Header/UserItem/UserIcon/UserIcon";
import {userPicturesURL} from "../../../../api/baseURL";


function UserItem(props) {

    const {user} = props;

    return (
        <div className={styles.container}>
            <UserIcon src={`${userPicturesURL}/${user.profilePicture}`} size={32}/>
            <div className={styles.userInfo}>
                <div className={styles.userName}>
                    {
                        `${user.firstName}`
                    }
                </div>
                <div className={styles.userRole}>
                    {
                        `${user.role.toLowerCase()}`
                    }
                </div>
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    const {user} = state.authorization;
    return {
        user,
    };
}

function mapDispatchToProps(dispatch) {

    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)

