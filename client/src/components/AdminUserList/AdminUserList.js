/*
* React 
* */
import React, {userState, useEffect} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {getUsersActionCreator, setQueryStringActionCreator} from '../../actions/userActionCreators';

/*
* Styles
* */
import styles from './AdminUserList.module.scss';

/*UTILS*/
import queryString from 'query-string';
/*
* COMPONENTS
* */
import UserItem from "./UserItem/UserItem";
import Spinner from "../Spinner/Spinner";


function AdminUserList(props) {
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    });


    useEffect(() => {
        props.getUsersAction(props.history.location.search);
    }, [props.location.search]);

    useEffect(() => {
        props.history.push({search: queryString.stringify(props.query)});
    }, [props.query]);


    const onScroll = (e) => {

        if ((props.count > props.users.length) && ((window.scrollY + window.innerHeight + 100) >= document.body.scrollHeight)) {
            props.setQueryStringAction();

        }

    };
    const renderSpinner = () => {
        if (props.isFetching) {
            return <Spinner/>
        }
    };

    const renderUserItems = () => {
        return props.users.map(user => (<UserItem key={user.id} user={user}/>));
    };


    return (
        <div className={styles.container}>
            {
                renderUserItems()
            }
            {
                renderSpinner()
            }
        </div>
    )

}

AdminUserList.propTypes = {};

AdminUserList.defaultProps = {

    users: [],

};

const mapStateToProps = store => {

    return store.adminUsersReducer;

};

const mapDispatchToProps = dispatch => ({

    getUsersAction: (queryString) => {
        return dispatch(getUsersActionCreator(queryString))
    },
    setQueryStringAction: () => {
        return dispatch(setQueryStringActionCreator())
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList)
