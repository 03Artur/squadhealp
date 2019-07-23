import React from 'react';
import DocumentTitle from 'react-document-title';


function Home(props) {
    console.log(props);
    return (
        <div>
            <DocumentTitle title="Home"/>
            <h1>Home Page</h1>
        </div>
    );

}

export default Home;