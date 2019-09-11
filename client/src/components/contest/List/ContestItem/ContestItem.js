import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestItem.module.scss';
import {PATHS, ROLE} from "../../../../constants";
import LikeButton from "./buttons/LikeButton/LikeButton";
import AddEntryButton from "./buttons/AddEntryButton/AddEntryButton";
import {Link} from 'react-router-dom';
import UniversalButton from "../../../UniversalButton/UniversalButton";
import classNames from 'classnames';
import {findChatByUniqAndJoinActionCreator} from "../../../../actions/actionCreators/chatActionCreators";


const ContestItem = (props) => {

    const {
        task: {
            id: taskId,
            title,
            type,
            style,
            contest,
            isFavorite,
        },
        user,
        onSelect,
        findChatByTaskIdAndJoinAction,
    } = props;

    const joinToChat = () => {
        findChatByTaskIdAndJoinAction(taskId)
    };

    const renderManipulativeOpportunities = () => {
        if (contest.userId === user.id) {

        } else if (user.role === ROLE.BUYER) {

        } else if (user.role === ROLE.CREATIVE) {
            return (
                <div className={styles.buttonContainer}>
                    <LikeButton taskId={taskId} isLiked={isFavorite}/>
                    <div className={styles.buttonRow}>

                        <UniversalButton isEnable={true} onClick={joinToChat}
                                         className={classNames(styles.buttonCol, styles.joinToChatButton)}>Join to
                            chat</UniversalButton>
                        <AddEntryButton className={styles.buttonCol} taskId={taskId}/>
                    </div>
                </div>
            );
        }
    };

    return (
        <li className={styles.container}>
            <Link to={`${PATHS.AFFILIATE_DASHBOARD_ENTRIES}?taskId=${taskId}`}>
                <h5 className={styles.taskTitle}>
                    {title}
                </h5>
            </Link>
            <div className={styles.infoContainer}>
                <h6 className={styles.typeInfo}>{`${type} / ${style}`}</h6>
                <p className={styles.description}>
                    {contest.description}
                </p>
            </div>
            {renderManipulativeOpportunities()}
        </li>
    )
};

ContestItem.propTypes = {
    task: PropTypes.object,
    className: PropTypes.string,
    onSelect: PropTypes.func,
};

ContestItem.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => {

    const {user} = state.authorizationReducer;

    return {
        user,
    }

};
const mapDispatchToProps = dispatch => ({
    findChatByTaskIdAndJoinAction: (taskId) => dispatch(findChatByUniqAndJoinActionCreator({taskId})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestItem)
