import React, {useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './Entries.module.scss';
import EntryList from "../../../../components/entry/EntryList/EntryList";
import {getEntriesActionCreator} from "../../../../actions/actionCreators/entryActionCreators/entryActionCreators";


const Entries = (props) => {

    const {getEntriesAction, history} = props;

    useEffect(() => {

        getEntriesAction(history.location.search);

    }, []);

    return (
        <Fragment>
            <EntryList/>
        </Fragment>
    )
};

Entries.propTypes = {
    className: PropTypes.string,
};

Entries.defaultProps = {};

/*
* React redux
* */
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    getEntriesAction: (queryString) => dispatch(getEntriesActionCreator(queryString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Entries)
