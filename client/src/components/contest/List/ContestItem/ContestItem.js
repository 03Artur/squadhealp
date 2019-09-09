import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './ContestItem.module.scss';
import {ROLE} from "../../../../constants";
import LikeButton from "./buttons/LikeButton/LikeButton";
import AddEntryButton from "./buttons/AddEntryButton/AddEntryButton";


const ContestItem = (props) => {

    const {task: {id: taskId, title, type, style, contest, isFavorite}, user} = props;
    console.log(contest);

    const renderManipulativeOpportunities = () => {
        if (contest.userId === user.id) {

        } else if (user.role === ROLE.BUYER) {

        } else if (user.role === ROLE.CREATIVE) {
            return (
                 <div className={styles.buttonContainer}>
                    <LikeButton taskId={taskId} isLiked={isFavorite} />
                    <AddEntryButton taskId={taskId}/>
                 </div>
            );
        }
    };


    return (
        <li className={styles.container}>
            <h5 className={styles.taskTitle}>
                {title}
            </h5>
            <div className={styles.infoContainer}>
                <h6 className={styles.typeInfo}>{`${type} / ${style}`}</h6>
                <p className={styles.description}>
                    {contest.description}
                </p>
            </div>

                {
                    renderManipulativeOpportunities()
                }

        </li>
    )
};

ContestItem.propTypes = {
    task: PropTypes.object,
    className: PropTypes.string,
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
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContestItem)
