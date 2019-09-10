import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './EntryList.module.scss';
import EntryItem from "./EntryItem/EntryItem";
import Spinner from "../../Spinner/Spinner";


const EntryList = (props) => {

    const {entries, isFetching, count} = props;


    const renderEntries = () => {
        return entries.map(entry => (<EntryItem key={entry.id} {...entry}/>))
    };

    const renderContent = () => {
        if (isFetching) {
            return (
                <li className={styles.spinnerContainer}>
                    <Spinner/>
                </li>
            )
        } else {
            return renderEntries();
        }
    };

    return (
        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                <h4 className={styles.count}>{`${count} Entries`}</h4>
            </div>
            <ul className={styles.list}>
                {
                    renderContent()
                }

            </ul>
        </div>
    )
};

EntryList.propTypes = {
    className: PropTypes.string,
};

EntryList.defaultProps = {};


const mapStateToProps = state => {
    const {entries, isFetching, count} = state.entriesReducer;

    return {
        entries,
        isFetching,
        count,
    }

};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EntryList)
