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
import styles from './StartChatButton.module.scss';

/*
* UTILS
* */



const StartChatButton = (props) => {


    return (
        <Fragment>

        </Fragment>
    )
};

StartChatButton.propTypes = {
    className: PropTypes.string,

};

StartChatButton.defaultProps = {

};

/*
* React redux
* */
const mapStateToProps = store => ({

});
const mapDispatchToProps = dispatch => ({
    startChatAction: (participants) => dispatch(startChatActionCreator(participants)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartChatButton)
