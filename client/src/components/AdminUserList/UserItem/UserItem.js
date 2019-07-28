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

const UserItem = ({user, ...props}) => {

    const classNamesCombineString = [styles.container, props.className].join(' ');

    return (
        <Fragment>
            <div className={classNamesCombineString}>
               <Picture src={user.profilePicture}/>
                <div className={styles.fullName}>{
                 `${user.firstName} ${user.lastName}`
                }
                </div>

            </div>
        </Fragment>
    )
};
UserItem.propTypes = {

    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        role: PropTypes.number.isRequired,
        profilePicture: PropTypes.string,
        isBanned: PropTypes.bool.isRequired,
        isActive: PropTypes.bool,

    }),
    className: PropTypes.string,
};


const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
    updateUserAction: (id,data) => dispatch(updateUserActionCreator(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)
