/*
* React 
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */
import Picture from './Picture/Picture'
/*
* Styles
* */
import styles from './UserItem.module.scss';

const UserItem = ({user, ...props}) => {


    return (
        <Fragment>
            <div className={styles.container}>
               <Picture src={user.profilePicture}/>
                <div>

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

    })
};


const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)
