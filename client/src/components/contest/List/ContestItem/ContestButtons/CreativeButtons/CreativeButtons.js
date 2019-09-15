import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './CreativeButtons.module.scss';
import LikeButton from "../../buttons/LikeButton/LikeButton";
import Button from "../../../../../Button/Button";
import classNames from 'classnames';
import {joinToChatActionCreator} from "../../../../../../actions/actionCreators/chatActionCreators";
import {Link} from 'react-router-dom';
import {PATHS} from "../../../../../../constants";
import history from "../../../../../../history";


const CreativeButtons = (props) => {

    const {
        contest: {
            id: taskId,
            isFavorite,
            chatId,
            winnerId,
        },
        chats,
        joinToChatAction
    } = props;

    const onJoinToChat = () => {
        joinToChatAction(chatId);
        history.push(`${PATHS.MESSAGES_CHAT}/${chatId}`)
    };

    const renderJoinToChatButton = () => {
        if (chats.has(chatId)) {
            history.push(`${PATHS.MESSAGES_CHAT}/${chatId}`)
        } else if (chatId) {
            const classname = classNames(styles.buttonCol, styles.joinToChatButton);
            return (
                <Button isEnable={true} onClick={onJoinToChat}
                        className={classname}>
                    {"Join to chat"}
                </Button>
            )
        }
    };
    const renderAddEntryButton = () => {
        if (!winnerId) {
            return (
                <Link className={styles.link} to={`${PATHS.ENTRIES}/${taskId}${PATHS.ENTRY}`}>
                    <Button className={classNames(styles.buttonCol, styles.startEntryButton)} taskId={taskId}>
                        {"Add Entry"}
                    </Button>
                </Link>
            )
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <LikeButton taskId={taskId} isLiked={isFavorite}/>
            </div>
            <div className={styles.row}>
                {
                    renderJoinToChatButton()
                }
                {
                    renderAddEntryButton()
                }
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
