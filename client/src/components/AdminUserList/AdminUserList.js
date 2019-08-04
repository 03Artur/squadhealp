/*
* React 
* */
import React, {userState, useEffect, useLayoutEffect} from 'react';
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


    useLayoutEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);

    }, [props.users.length]);

    const onScroll = (e) => {
        if (e.type === 'scroll' && (props.users.length < props.count) && ((window.scrollY + window.innerHeight + 100) >= document.body.scrollHeight)) {
            props.setQueryStringAction();

        }
    };

    useEffect(() => {
        props.getUsersAction(props.history.location.search);
    }, [props.location.search]);

    useEffect(() => {
        props.history.push({search: queryString.stringify(props.query)});
    }, [props.query]);


    const renderSpinner = () => {
        if (props.isFetching) {
            return <Spinner/>
        }
    };

    const renderUserItems = () => {
        console.log("}}}}}}}}}}}}}}}}}}}}}}}}")
        return props.users.map(user => (<UserItem key={user.id} user={user}/>));
    };

    const renderMoreButton = () => {
        if (props.users.length < props.count) {
            return (
                <div className={styles.moreButton} onClick={props.setQueryStringAction}>...more</div>
            )
        }
    }

    return (
        <div className={styles.container}>
            {
                renderUserItems()
            }
            {
                renderMoreButton()
            }
            {
                renderSpinner()
            }
        </div>
    )

}

AdminUserList.propTypes = {};

AdminUserList.defaultProps = {};

const mapStateToProps = store => {

    const {users, query, isFetching, count} = store.adminUsers;
    return {users, query, isFetching, count}

};

const mapDispatchToProps = dispatch => ({

    getUsersAction: queryString => dispatch(getUsersActionCreator(queryString)),

    setQueryStringAction: () => dispatch(setQueryStringActionCreator())


});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList)
