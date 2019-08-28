/*
* React
* */
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/*
* Redux & friends
* */
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
/*
* Components
* */


/*
* styles
* */
import styles from './ChatSearchForm.module.scss';
import {FORM_NAMES} from "../../../../constants";

/*
* UTILS
* */


const ChatSearchForm = (props) => {


    const onSearchInputChange = (e) => {

    };

    return (
        <div className={styles.container}>
            <input placeholder={'Search'} onChange={onSearchInputChange} type={"text"} className={styles.searchInput}/>
        </div>
    )
};

ChatSearchForm.propTypes = {};

ChatSearchForm.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = store => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
        form: FORM_NAMES.CHAT_SEARCH_FORM,
    })(ChatSearchForm)
)
