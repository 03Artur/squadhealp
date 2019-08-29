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
import {selectChatRoomActionCreator} from "../../../../../actions/actionCreators/chatActionCreators";

/*
* UTILS
* */


const ChatItem = (props) => {
    console.log(props);
    const {messages, room, members} = props;
    const lastMessage = messages[0];
    const author = members.find(item => item.id === lastMessage.authorId);




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

    messages: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            profilePicture: PropTypes.string,
        }),
        value: PropTypes.string.isRequired,
        timestamp: PropTypes.string,
    }),),
    room: PropTypes.string.isRequired,
};

ChatItem.defaultProps = {};

const mapStateToProps = store => {

    const {room: currentRoom} = store.chat;

    return {
        currentRoom,
    }
};

const mapDispatchToProps = dispatch => ({

    selectRoomAction: (room) => dispatch(selectChatRoomActionCreator(room)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem)
