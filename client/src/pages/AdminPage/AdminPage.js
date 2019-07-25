import React from 'react';
import {connect} from 'react-redux';
import queryString from 'query-string';

import {getUsersActionCreator, getUsersLimitChangeActionCreator} from '../../actions/userActionCreators';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    setQueryString = () => {
        this.props.location.search = queryString.stringify(this.props.query);
    };
    componentDidMount() {

        this.props.getUsers();
        this.setQueryString();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsersActionCreator()),
    changeLimit: (limit) => dispatch(getUsersLimitChangeActionCreator(limit)),
});

const mapStateToProps = store => {
    const {users, error, isFetching, query} = store.userReducer;
    return {users, error, isFetching, query};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);



