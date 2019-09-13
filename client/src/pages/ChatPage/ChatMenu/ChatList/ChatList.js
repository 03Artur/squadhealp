import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {connect} from 'react-redux';
import styles from './ChatList.module.scss';
import ChatItem from "./ChatItem/ChatItem";
import {selectChatActionCreator} from "../../../../actions/actionCreators/chatActionCreators";
import classNames from 'classnames';


const ChatList = (props) => {

    const {chats, messages, selectedChat, participants, user} = props;


    const renderChat = (chat) => {
        const chatMessages = messages.get(chat._id);
        const chatOwner = participants.get(chat.ownerId);
        let lastMessage = null;
        let author = null;
        if (chatMessages.length) {
            lastMessage = _.last(chatMessages);
            author = participants.get(lastMessage.authorId);
        } else {
            lastMessage = {
                value: `${user.id === chat.ownerId ? 'You' : chatOwner.firstName} started conversation`,
                createdAt:
                chat.createdAt,
            };
            author = chatOwner;
        }
        return (
            <ChatItem key={chat._id}
                      name={chat.name}
                      isSelected={selectedChat === chat._id}
                      lastMessage={lastMessage}
                      onClick={() => {
                          props.selectChatAction(chat._id)
                      }}
                      author={author}
            />
        );
    };

    const renderChatItems = () => {
        if (chats) {
            const chatsArray = [];
            chats.forEach((value, key) => chatsArray.push(renderChat(value)));
            return chatsArray;
        }
    };


    return (
        <ul className={classNames(styles.list, props.className)}>
            {
                renderChatItems()
            }
        </ul>
    )
};


ChatList.propTypes = {
    className: PropTypes.string
};

ChatList.defaultProps = {

};


const mapStateToProps = store => {

    const {chats} = store.chatsReducer;
    const {messages} = store.chatsMessagesReducer;
    const {participants} = store.chatsParticipantsReducer;
    const {chatId} = store.chatReducer;
    const {user} = store.authorizationReducer;
    return {
        user,
        chats,
        messages,
        participants,
        selectedChat: chatId,
    }
};
const mapDispatchToProps = dispatch => ({

    selectChatAction: chatId => dispatch(selectChatActionCreator(chatId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
