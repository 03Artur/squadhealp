import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './CreativeButtons.module.scss';
import LikeButton from "../../buttons/LikeButton/LikeButton";
import Button from "../../../../../Button/Button";
import AddEntryButton from "../../buttons/AddEntryButton/AddEntryButton";
import classNames from 'classnames';
import {joinToChatActionCreator} from "../../../../../../actions/actionCreators/chatActionCreators";
import {Link} from 'react-router-dom';
import {PATHS} from "../../../../../../constants";


const CreativeButtons = (props) => {

    const {
        contest: {
            id: taskId,
            isFavorite,
            chatId,
        },
        chats,
        joinToChatAction
    } = props;

    const onJoinToChat = () => {
        joinToChatAction(chatId);
    };

    const getJoinButtonEnable = () => {

    };
    const className = {
        startEntryButton: classNames(styles.buttonCol, styles.startEntryButton),
        joinToChatButton: classNames(styles.buttonCol, styles.joinToChatButton),
    };
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <LikeButton taskId={taskId} isLiked={isFavorite}/>
            </div>
            <div className={styles.row}>
                <Button isEnable={true} onClick={onJoinToChat}
                        className={className.joinToChatButton}>
                    {"Join to chat"}
                </Button>
                <Link className={styles.link} to={`${PATHS.ENTRIES}/${taskId}${PATHS.ENTRY}`}>
                    <Button className={className.startEntryButton} taskId={taskId}>
                        {"Add Entry"}
                    </Button>
                </Link>
            </div>
        </div>
    )
};

CreativeButtons.propTypes = {
    className: PropTypes.string,
    contest: PropTypes.object.isRequired,
};

CreativeButtons.defaultProps = {};

const mapStateToProps = state => {
    const {chats} = state.chatsReducer;

    return {
        chats,
    }
};

const mapDispatchToProps = dispatch => ({
    joinToChatAction: chatId => dispatch(joinToChatActionCreator(chatId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreativeButtons)
