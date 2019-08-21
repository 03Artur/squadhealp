import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import styles from './AffiliateDashboard.module.scss';

function AffiliateDashboard(props) {


    return (
        <div className={styles.pageContainer}>
            <Header/>
            <Nav/>
        </div>
    );
}


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AffiliateDashboard)

