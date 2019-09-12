
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './OwnerButtons.module.scss';
import Button from "../../../../../Button/Button";
import {createTaskChatActionCreator} from "../../../../../../actions/actionCreators/chatActionCreators";


const OwnerButtons = (props) => {

    const {createTaskChatAction, contest} = props;
    console.log(contest);
    const onChatCreat = () => {
      createTaskChatAction(contest.id);
    };

    return (
        <div className={styles.container}>
            <Button isEnable={!contest.chatId} onClick={onChatCreat} className={styles.createChatButton}>
                {'Open chat'}
            </Button>
        </div>
    )
};

OwnerButtons.propTypes = {
    className: PropTypes.string,
    contest: PropTypes.object.isRequired,

};

OwnerButtons.defaultProps = {

};


const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    createTaskChatAction: (taskId) => dispatch(createTaskChatActionCreator(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnerButtons)
