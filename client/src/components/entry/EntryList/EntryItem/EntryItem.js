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


const EntryItem = (props) => {

    const {id: entryId, taskId, userId, title, files, isRejected, user} = props;

    const renderActionButtons = () => {
        if (userId === user.id) {
            return
        }
        if (user.role === ROLE.BUYER) {
            return (
                <div>
                    <MakeWinnerButton/>
                    <RejectButton/>
                </div>
            )
        }
    };

    return (
        <li>
            <h3>
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
    setWinnerEntryAction: entryId => dispatch(setWinningEntryActionCreator(entryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryItem)
