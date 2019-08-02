import React, {Fragment} from 'react';
import DocumentTitle from 'react-document-title';


/*
* COMPONENTS
* */
import Header from "../../components/headers/Header/Header";
import HomeNavigation from "../../components/navigations/HomeNavigation/HomeNavigation";

function HomePage(props) {

    return (
        <Fragment>
            <DocumentTitle title="Home"/>
            <Header/>
            <HomeNavigation/>
            <h1>Home Page</h1>
        </Fragment>
    );

}

export default HomePage;