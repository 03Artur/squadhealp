import React, {lazy, Suspense} from 'react';
import DocumentTitle from 'react-document-title';
import styles from './HomePage.module.scss';

/*
* COMPONENTS
* */
import AccessRoute from "../../components/routes/AccessRoute/AccessRoute";
import {PATHS, ROLE} from "../../constants";
import HomeFooter from "../../components/footers/HomeFooter/HomeFooter";
import HomeNav from "./Header/nav/HomeNav/HomeNav";
import HomeHeader from "./Header/Header";
import AuthorizedRoute from "../../components/routes/AuthorizedRoute/AuthorizedRoute";
import ContestsPage from "../ContestsPage/ContestsPage";
import SingleContestPage from "../SingleContestPage/SingleContestPage";
const StartContestPage = lazy(() => import('../StartContestPage/StartContestPage'));
const AdminPage = lazy(() => import('../AdminPage/AdminPage'));


function HomePage(props) {

    return (
        <div className={styles.pageContainer}>
            <HomeHeader/>
            <DocumentTitle title="Home"/>
            <AccessRoute roles={[ROLE.ADMIN,ROLE.BUYER]} path={PATHS.CONTEST} render = {props => <StartContestPage {...props}/>}/>
            <AuthorizedRoute path={PATHS.CONTESTS} render = {props => <ContestsPage {...props}/>}/>
            <AuthorizedRoute path={`${PATHS.CONTEST}/:id`} render = {props => <SingleContestPage {...props}/>}/>
            <HomeFooter/>
        </div>
    );

}

export default HomePage;