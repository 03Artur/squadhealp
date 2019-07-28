/*
* React 
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {getUsersActionCreator} from '../../actions/userActionCreators';

/*
* Styles
* */
import styles from './AdminUserList.module.scss';

/*UTILS*/
import queryString from 'query-string';
import UserItem from "./UserItem/UserItem";


class AdminUserList extends Component {

    componentDidMount() {
        this.props.location.search = queryString.stringify(this.props.query);
        this.props.getUsersAction()
    }


    renderUserItems = () => {
        return this.props.users.map(user => (<UserItem className={styles.userItem} key={user.id} user={user}/>));
    };

    render() {
        return (
            <div className={styles.container}>
                {
                    this.renderUserItems()
                }
            </div>
        )
    }
}
AdminUserList.propTypes = {};
AdminUserList.defaultProps = {
    users: [],
};

const mapStateToProps = store => {

    const data = store.userReducer;

    return data;
};

const mapDispatchToProps = dispatch => ({
    getUsersAction: () => dispatch(getUsersActionCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList)
