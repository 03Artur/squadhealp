import React from 'react';
import {connect} from 'react-redux';

import styles from './UserItem.module.scss'

function UserItem(props) {


    return (
        <React.Fragment>

        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    const {user} = state.authorization;
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)

