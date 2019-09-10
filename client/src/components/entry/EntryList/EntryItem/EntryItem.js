import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './EntryItem.module.scss';
import {ROLE} from "../../../../constants";
import FileList from "../../../FileList/FileList";
import {
    rejectEntryActionCreator,
    setWinningEntryActionCreator
} from "../../../../actions/actionCreators/entryActionCreators/entryActionCreators";
import RejectButton from "./buttons/RejectButton/RejectButton";
import MakeWinnerButton from "./buttons/MakeWinnerButton/MakeWinnerButton";
import UniversalButton from "../../../UniversalButton/UniversalButton";
import classNames from 'classnames';

const EntryItem = (props) => {

    const {
        id: entryId,
        taskId,
        userId,
        title,
        files,
        isRejected,
        user,
        rejectEntryAction,
        makeWinnerEntryAction,
        isWinner,
        task,
    } = props;


    const makeWinnerEntry = () => {

        makeWinnerEntryAction(entryId);
    };
    const rejectEntry = () => {

        if (!isRejected) {
            rejectEntryAction(entryId)
        }
    };

    const renderActionButtons = () => {
        if (userId === user.id) {
            return
        }
        if (user.role === ROLE.BUYER) {

            const rejectButtonClassName = classNames(styles.button, styles.rejectButton, {[styles.rejectedButtonStyle]: isRejected});
            const winnerButtonClassName = classNames(styles.button, styles.winnerButton, {[styles.isWinnerButtonStyle]: isWinner});

            return (
                <div className={styles.actionContainer}>
                    <div className={styles.buttonContainer}>
                        <UniversalButton className={winnerButtonClassName}
                                         onClick={makeWinnerEntry}>Make winner</UniversalButton>
                        <UniversalButton isEnable={!isRejected} className={rejectButtonClassName}
                                         onClick={rejectEntry}>Reject</UniversalButton>
                    </div>
                </div>
            )
        }
    };

    return (
        <li className={classNames(styles.container, {
            [styles.rejectContainer]: isRejected,
            [styles.winnerContainer]: !isRejected
        })}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <FileList files={files}/>
            {
                renderActionButtons()
            }
        </li>
    )
};

EntryItem.propTypes = {
    className: PropTypes.string,
};

EntryItem.defaultProps = {};

const mapStateToProps = state => {
    const {user} = state.authorizationReducer;

    return {
        user,
    }

};
const mapDispatchToProps = dispatch => ({
    rejectEntryAction: entryId => dispatch(rejectEntryActionCreator(entryId)),
    makeWinnerEntryAction: entryId => dispatch(setWinningEntryActionCreator(entryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryItem)
