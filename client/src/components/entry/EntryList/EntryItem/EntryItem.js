import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './EntryItem.module.scss';
import {ROLES} from "../../../../constants";
import {
    rejectEntryActionCreator,
    setWinningEntryActionCreator
} from "../../../../actions/actionCreators/entryActionCreators/entryActionCreators";
import Button from "../../../Button/Button";
import classNames from 'classnames';
import LazyImage from "../../../Image/LazyImage";
import {entryFilesUrl} from "../../../../api/apiPaths";
import {useAlert} from 'react-alert';


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
    const alert = useAlert();

    const makeWinnerEntry = () => {
        if (isWinner || isRejected) {
            return;
        }
        makeWinnerEntryAction(entryId);
    };

    const rejectEntry = () => {
        if (isRejected || isWinner) {

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
        if (user.role === ROLES.BUYER) {
            const rejectButtonClassName = classNames(styles.button, styles.rejectButton, {[styles.rejectedButtonStyle]: isRejected});
            const winnerButtonClassName = classNames(styles.button, styles.winnerButton, {[styles.isWinnerButtonStyle]: isWinner});
            return (
                <div className={styles.actionContainer}>
                    <div className={styles.buttonContainer}>
                        <Button className={winnerButtonClassName}
                                onClick={makeWinnerEntry}>Make winner</Button>
                        <Button isEnable={!isRejected} className={rejectButtonClassName}
                                onClick={rejectEntry}>Reject</Button>
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
