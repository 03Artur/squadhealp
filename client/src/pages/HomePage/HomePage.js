import React, {Fragment} from 'react';
import DocumentTitle from 'react-document-title';


/*
* COMPONENTS
* */
import Header from "../../components/headers/Header/Header";

function HomePage(props) {

    return (
        <Fragment>
            <DocumentTitle title="Home"/>
            <Header/>
            <h1>Home Page</h1>
        </Fragment>
    );

}

export default HomePage;