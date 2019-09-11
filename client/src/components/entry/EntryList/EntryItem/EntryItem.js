import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './EntryItem.module.scss';
import {ROLE} from "../../../../constants";
import {
    rejectEntryActionCreator,
    setWinningEntryActionCreator
} from "../../../../actions/actionCreators/entryActionCreators/entryActionCreators";
import UniversalButton from "../../../UniversalButton/UniversalButton";
import classNames from 'classnames';
import LazyImage from "../../../Image/LazyImage";
import {entryFilesUrl} from "../../../../api/baseURL";

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
        if (isWinner) {
            return;
        }
        makeWinnerEntryAction(entryId);
    };

    const rejectEntry = () => {
        if (isRejected) {
            return;
        }
        rejectEntryAction(entryId);
    };

    const renderImage = (file) => {
        return (
            <LazyImage key={file} src={`${entryFilesUrl}/${file}`} className={styles.image} alt={file}/>
        );
    };

    const renderImages = () => {
        return (
            <div className={styles.imageContainer}>
                {files.map(renderImage)}
            </div>
        )
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

    const getItemClassName = () => {
        return classNames(styles.container, {
            [styles.rejectContainer]: isRejected,
            [styles.winnerContainer]: !isRejected
        });
    };

    return (
        <li className={getItemClassName()}>
            <h3 className={styles.title}>
                {title}
            </h3>
            {renderImages()}
            {renderActionButtons()}
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
