import React, {useEffect} from 'react';
import {connect} from 'react-redux';

function UserMenu(props) {

    useEffect(() => {

    }, [])

}


function mapStateToProps(state) {
    const {user} = state.authorization;

    return {
        user,
    }
}

export default connect(mapStateToProps,)(UserMenu)
