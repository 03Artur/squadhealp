import React, {Component, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './StartEntryPage.module.scss';
import EntryForm from "../../components/forms/EntryForm/EntryForm";
import {postEntryActionCreator} from "../../actions/actionCreators/entryActionCreators/entryActionCreators";
import {PATHS} from "../../constants";
import queryString from 'query-string';

const StartEntryPage = (props) => {

    const {createEntryAction, match, entry, history, user} = props;

    useEffect(() => {

        if (entry) {
            history.push({
                pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                search: queryString.stringify({
                    userId: user.id,
                })
            });
        }
    }, [entry]);

    const submit = (values) => {
        const {files, ...rest} = values;
        const formData = new FormData();
        if (files) {
            for (let file of files) {
                formData.append("files", file);
            }
        }
        formData.append('entry', JSON.stringify(rest));
        createEntryAction(match.params.taskId, formData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <h2>
                    Start Entry
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque earum est, minima natus nihil non obcaecati praesentium provident reiciendis rem repellendus saepe sed suscipit tempora ut, velit voluptate voluptates.
                </p>
            </div>

            <EntryForm onSubmit={submit}/>
        </div>
    )
};

StartEntryPage.propTypes = {
    className: PropTypes.string,
};

StartEntryPage.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => {
    const {entry} = state.entryCreationReducer;
    const {user} = state.authorizationReducer;
    return {
        entry,
        user,
    }
};
const mapDispatchToProps = dispatch => ({
    createEntryAction: (taskId, entry) => dispatch(postEntryActionCreator(taskId, entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartEntryPage)
