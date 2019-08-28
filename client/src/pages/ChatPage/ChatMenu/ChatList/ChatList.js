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


/*
* styles
* */
import styles from './ChatList.module.scss';

/*
* UTILS
* */



const ChatList = (props) => {


    return (
        <ul className={styles.list}>

        </ul>
    )
};

ChatList.propTypes = {

};

ChatList.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => {
    return store.allChats;
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
