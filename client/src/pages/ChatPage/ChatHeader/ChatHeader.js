import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import styles from './ChatHeader.module.scss';
import Logo from "../../../components/Logo/Logo";


const ChatHeader = (props) => {


    return (
        <div className={styles.header}>
            <Logo isColor={false}/>
        </div>
    )
};
export default ChatHeader;
