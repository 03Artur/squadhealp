/*
* React 
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {updateUserActionCreator} from '../../../actions/userActionCreators';

/*
* Components
* */
import Picture from './Picture/Picture';
/*
* Styles
* */
import styles from './UserItem.module.scss';
import {ROLE, ROLE_STRING} from "../../../constants";

const UserItem = ({user, ...props}) => {
    const classNames = [styles.container, props.className];
    if (user.isBanned) {
        classNames.push(styles.banned);
    }
    const classNamesCombineString = classNames.join(' ');
    const banClick = () => {
        props.updateUserAction(user.id, {isBanned: !user.isBanned})
    };
    return (
        <div className={classNamesCombineString}>
            <Picture src={user.profilePicture}/>
            <div className={styles.infoContainer}>
                <div className={styles.fullName}>{
                    `${user.firstName} ${user.lastName}`
                }
                </div>
                <div>{
                    user.email
                }</div>
                <div>{
                    ROLE_STRING.get(`${user.role}`)
                }</div>
                <div onClick={banClick} className={styles.banButton}>{
                    user.isBanned?'to unban':'to ban'
                }</div>
            </div>
        </div>
    )
};
UserItem.propTypes = {

    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        role: PropTypes.oneOf(Object.values(ROLE)).isRequired,
        profilePicture: PropTypes.string,
        isBanned: PropTypes.bool.isRequired,


    }),
    className: PropTypes.string,
};


const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
    updateUserAction: (id, data) => dispatch(updateUserActionCreator(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)
