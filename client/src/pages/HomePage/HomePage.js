import React from 'react';
import DocumentTitle from 'react-document-title';


/*
* COMPONENTS
* */
import Header from "../../components/headers/Header/Header";

function HomePage(props) {
    console.log(props);
    return (
        <React.Fragment>
            <DocumentTitle title="Home"/>
            <Header/>
            <h1>Home Page</h1>
        </React.Fragment>
    );

}

export default HomePage;