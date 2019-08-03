import React, {Fragment} from 'react';
import DocumentTitle from 'react-document-title';

import styles from './HomePage.module.scss';
/*
* COMPONENTS
* */
import Header from "../../components/headers/Header/Header";
import HomeNavigation from "../../components/navigations/HomeNavigation/HomeNavigation";

function HomePage(props) {

    return (
        <div className={styles.pageContainer}>
            <DocumentTitle title="Home"/>
            <Header/>

            <h1>Home Page</h1>
        </div>
    );

}

export default HomePage;