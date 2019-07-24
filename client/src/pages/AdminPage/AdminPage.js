import React from 'react';
import {connect} from 'react-redux';

import {getAllUsersActionCreator} from '../../actions/userActionCreators';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispaths) => ({
    getAllUsers: () => dispaths(getAllUsersActionCreator()),


});

const mapStateToProps = store => {
    const {users, error, isFetching} = store.authorizationReducer;
    return {users, error, isFetching};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);



