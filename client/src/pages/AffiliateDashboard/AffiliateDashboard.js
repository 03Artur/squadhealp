import React, {useState, useRef} from 'react';
import Header from "./Header/Header";
import styles from './AffiliateDashboard.module.scss';
import Menu from "./Menu/Menu";
import {Switch} from 'react-router-dom';
import AccessRoute from "../../components/routes/AccessRoute/AccessRoute";
import {PATHS, ROLE} from "../../constants";
import AdminPage from "../AdminPage/AdminPage";
import AuthorizedRoute from "../../components/routes/AuthorizedRoute/AuthorizedRoute";
import SingleContestPage from "../SingleContestPage/SingleContestPage";
import Contests from "./content/Contests/Contests";
import Entries from "./content/Entries/Entries";

function AffiliateDashboard(props) {

    return (
        <div className={styles.pageContainer}>
            <Menu/>
            <div className={styles.contentContainer}>
                <Header/>
                <Switch>
                    <AccessRoute path={PATHS.AFFILIATE_DASHBOARD_USERS} roles={[ROLE.ADMIN]}
                                 render={props => <AdminPage {...props}/>}/>
                    <AuthorizedRoute path={PATHS.AFFILIATE_DASHBOARD_CONTESTS}
                                     render={props => <Contests {...props}/>}/>
                    <AuthorizedRoute path={PATHS.AFFILIATE_DASHBOARD_ENTRIES} render={props => <Entries {...props}/>}/>
                    <AccessRoute path={`${PATHS.AFFILIATE_DASHBOARD_CONTEST}/:contestId`}
                                 render={props => <SingleContestPage {...props}/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default (AffiliateDashboard)
