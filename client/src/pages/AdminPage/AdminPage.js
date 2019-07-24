import React from 'react';
import {connect} from 'react-redux';

import {getUsersActionCreator, getUsersLimitChangeActionCreator} from '../../actions/userActionCreators';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispaths) => ({
    getUsers: () => dispaths(getUsersActionCreator()),
    changeLimit: (limit) => dispaths(getUsersLimitChangeActionCreator(limit)),
});

const mapStateToProps = store => {
    const {users, error, isFetching, } = store.userReducer;
    return {users, error, isFetching,};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);



