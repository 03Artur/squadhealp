import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import styles from './ChatHeader.module.scss';
import Logo from "../../../components/Logo/Logo";
import StartChatButton from "../StartChatButton/StartChatButton";


const ChatHeader = (props) => {


    return (
        <div className={styles.header}>
            <Logo isColor={false}/>
            <StartChatButton userId={2}/>
            <StartChatButton userId={3}/>
            <StartChatButton userId={1}/>
        </div>
    )
};
export default ChatHeader;
