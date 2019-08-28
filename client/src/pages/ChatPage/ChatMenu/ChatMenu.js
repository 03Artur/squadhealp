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
import styles from './ChatMenu.module.scss';
import ChatList from "./ChatList/ChatList";
import ChatSearchForm from "./ChatSearchForm/ChatSearchForm";

/*
* UTILS
* */



const ChatMenu = (props) => {


    return (
        <div className={styles.menuContainer}>
            <ChatSearchForm />
            <ChatList className={styles.chatList}/>
        </div>
    )
};

ChatMenu.propTypes = {

};

ChatMenu.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({
    isOpen: store.chatMenu.isOpen,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu)
