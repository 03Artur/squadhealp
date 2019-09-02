/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';

/*
* Components
* */


/*
* styles
* */
import styles from './ChatItem.module.scss';
import AuthorIcon from "../../../Chat/MessageList/MessageItem/AuthorIcon/AuthorIcon";
import {
    selectChatActionCreator,
    selectChatRoomActionCreator
} from "../../../../../actions/actionCreators/chatActionCreators";

/*
* UTILS
* */


const ChatItem = (props) => {

    const {chat, messages,participants} = props;
    const lastMessage = messages.get(chat._id)



    const renderNewMessagesCount = () => {
        if (room !== props.currentRoom && messages.length > 1) {
            return (
                <div className={styles.newMessagesCount}>
                    <span>
                    {
                        messages.length - 1
                    }
                    </span>
                </div>
            )
        }
    };


    const onSelect = () => {
        props.selectRoomAction(room);
    };
    return (
        <li onClick={onSelect} className={styles.chatItem}>
            <div>
                <AuthorIcon size={48} firstName={author.firstName} lastName={author.lastName}
                            src={author.profilePicture}/>
            </div>

            <div className={styles.info}>
                <div className={styles.infoRow}>
                    <span>
                         {
                             `${author.firstName} ${author.lastName}`
                         }
                    </span>
                    <span>{
                        lastMessage.timestamp
                    }</span>

                </div>
                <div className={styles.messagesInfo}>
                    <div className={styles.message}>
                        {
                            lastMessage.value
                        }
                    </div>
                    {
                        renderNewMessagesCount()
                    }
                </div>
            </div>
        </li>
    )
};

ChatItem.propTypes = {
    chat: PropTypes.object.isRequired,
    lastMessage: PropTypes.object,


};

ChatItem.defaultProps = {
};

const mapStateToProps = store => {



    return {
    }

};

const mapDispatchToProps = dispatch => ({

    selectChatAction: chatId => dispatch(selectChatActionCreator(chatId))

});

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem)
