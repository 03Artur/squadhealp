import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './ChatItem.module.scss';
import AuthorIcon from "../../../Chat/MessageList/MessageItem/AuthorIcon/AuthorIcon";


const ChatItem = (props) => {

    const {author, isSelected, onClick, lastMessage, newMessagesCount} = props;

    const renderNewMessagesCount = () => {
        if (!isSelected && newMessagesCount) {
            return (
                <div className={styles.newMessagesCount}>
                    <span>
                    {
                        newMessagesCount
                    }
                    </span>
                </div>
            )
        }
    };

    return (

        <li onClick={onClick} className={styles.chatItem}>
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
                    <span>
                        {
                            lastMessage.createdAt
                        }
                    </span>
                </div>
                <div className={styles.messagesInfo}>
                    <div className={styles.message}>
                        {
                            lastMessage.value
                        }
                    </div>
                    {/*{
                        renderNewMessagesCount()
                    }*/}
                </div>
            </div>
        </li>
    )
};

ChatItem.propTypes = {
    author: PropTypes.object,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    lastMessage: PropTypes.object,
    newMessagesCount: PropTypes.number,
};

ChatItem.defaultProps = {};

export default ChatItem;
