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
import UserIcon from "./UserIcon/UserIcon";

/*
* Styles
* */
import styles from './UserItem.module.scss';

const UserItem = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

UserItem.propTypes = {

};

UserItem.defaultPros = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)
