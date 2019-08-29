import React from 'react';
import {connect} from 'react-redux';
import styles from './ChatSearchForm.module.scss';
import {searchChatRoomActionCreator} from "../../../../actions/actionCreators/chatActionCreators";

let ChatSearchForm = (props) => {

    const onChange = (e) => {
        const value = e.target.value;
        if (value)
            props.searchChatAction(value)
    };

    return (
        <div className={styles.container}>
            <input onChange={onChange} placeholder={'Search'} type={"text"} className={styles.searchInput}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    searchChatAction: searchValue => dispatch(searchChatRoomActionCreator(searchValue)),
});

export default connect(null, mapDispatchToProps)(ChatSearchForm)

