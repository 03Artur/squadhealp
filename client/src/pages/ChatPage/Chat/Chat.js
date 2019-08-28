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
import styles from './Chat.module.scss';
import MessageList from "./MessageList/MessageList";
import MessageForm from "./MessageForm/MessageForm";

/*
* UTILS
* */



const Chat = (props) => {


    return (
        <div>
            <MessageList/>
            <MessageForm/>
        </div>
    )
};

Chat.propTypes = {

};

Chat.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
