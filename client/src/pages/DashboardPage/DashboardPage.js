import React from 'react';
import {connect} from 'react-redux';
import Header from "./Header/Header";
import Nav from "./Nav/Nav";


function DashboardPage(props) {


    return (
        <React.Fragment>
            <Header/>
            <Nav/>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)

