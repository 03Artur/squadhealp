/*
* React 
* */
import React, {Component, Fragment} from 'react';
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


class AdminUserList extends Component {
    constructor(props) {
        super(props);

        if (this.props.location.search) {
            this.props.setQueryStringAction(queryString.parse(props.location.search))
        }

    }

    loadUsers = () => {
        this.props.getUsersAction();
    };

    componentDidMount() {
        console.log(this.props.query);
        this.loadUsers();
        window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = (e) => {
        if ((this.props.count > this.props.users.length) && ((window.scrollY + window.innerHeight + 100) >= document.body.scrollHeight)) {
            this.loadUsers();
        }


    };
    renderSpinner = () => {
        if (this.props.isFetching) {
            return <Spinner/>
        }
    };

    renderUserItems = () => {
        return this.props.users.map(user => (<UserItem key={user.id} user={user}/>));
    };

    render() {
        return (
            <div className={styles.container}>
                {
                    this.renderUserItems()
                }
                {
                    this.renderSpinner()
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

    const data = store.adminUsersReducer;

    return data;
};

const mapDispatchToProps = dispatch => ({
    getUsersAction: () => dispatch(getUsersActionCreator()),
    setQueryStringAction: (query) => dispatch(setQueryStringActionCreator(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserList)
