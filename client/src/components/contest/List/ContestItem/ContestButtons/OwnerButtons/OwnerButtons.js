import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './OwnerButtons.module.scss';
import Button from "../../../../../Button/Button";
import {
    createTaskChatActionCreator,
    selectChatActionCreator
} from "../../../../../../actions/actionCreators/chatActionCreators";
import history from "../../../../../../history";
import {PATHS} from "../../../../../../constants";

const OwnerButtons = (props) => {

    const {createTaskChatAction, selectChatAction, contest: {id, chatId}} = props;

    const onChatButtonClick = () => {
        if (chatId) {
            history.push(`${PATHS.MESSAGES_CHAT}/${chatId}`)
        } else {
            createTaskChatAction(id);
        }
    };


    return (
        <div className={styles.container}>
            <Button onClick={onChatButtonClick} className={styles.createChatButton}>
                {chatId ? 'Open chat' : 'Start chat'}
            </Button>
        </div>
    )
};

OwnerButtons.propTypes = {
    className: PropTypes.string,
    contest: PropTypes.object.isRequired,
};

OwnerButtons.defaultProps = {
    contest: {},
};

const mapDispatchToProps = dispatch => ({
    createTaskChatAction: (taskId) => dispatch(createTaskChatActionCreator(taskId)),
    selectChatAction: (chatId) => dispatch(selectChatActionCreator(chatId)),
});

export default connect(null, mapDispatchToProps)(OwnerButtons)
