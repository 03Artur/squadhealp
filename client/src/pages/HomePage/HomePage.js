import React, {Fragment,lazy, Suspense} from 'react';
import DocumentTitle from 'react-document-title';
import {Route} from 'react-router-dom';
import styles from './HomePage.module.scss';

/*
* COMPONENTS
* */
import Header from "../../components/headers/DesktopHeader/DesktopHeader";
import AccessRoute from "../../components/routes/AccessRoute/AccessRoute";
import {PATH, ROLE} from "../../constants";

const StartContestPage = lazy(() => import('../StartContestPage/StartContestPage'));
const AdminPage = lazy(() => import('../AdminPage/AdminPage'));


function HomePage(props) {

    return (
        <div className={styles.pageContainer}>
            <DocumentTitle title="Home"/>
            <Header/>
            <AccessRoute roles={[ROLE.ADMIN,ROLE.BUYER]} path={PATH.CONTEST} render = {props => <StartContestPage {...props}/>}/>


        </div>
    );

}

export default HomePage;