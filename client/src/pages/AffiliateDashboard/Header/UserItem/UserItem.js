import React from 'react';
import {connect} from 'react-redux';

import styles from './UserItem.module.scss'
import UserIcon from "../../../HomePage/Header/UserItem/UserIcon/UserIcon";
import {userPicturesURL} from "../../../../api/baseURL";


function UserItem(props) {

    const {user} = props;

    return (
        <div className={styles.container}>
            <UserIcon src={`${userPicturesURL}/${user.profilePicture}`} size={40}/>
            <div >
                <div>
                    {
                        `${user.firstName}`
                    }
                </div>
                <div>
                    {
                        `${user.role}`
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

