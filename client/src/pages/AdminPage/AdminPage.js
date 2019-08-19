import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* COMPONENTS
* */
import AdminUserList from "../../components/AdminUserList/AdminUserList";
import {PATHS} from "../../constants";
import DocumentTitle from 'react-document-title';
import DesktopHeader from "../../components/headers/DesktopHeader/DesktopHeader";

const AdminPage = props => {


    return (
        <div>
            <DocumentTitle title="Admin"/>
            <DesktopHeader/>
            <Switch>
                <Route path={`${PATHS.ADMIN}${PATHS.USERS}`} render={(props) => (<AdminUserList {...props} />)}/>
            </Switch>
        </div>
    )

};


export default AdminPage;



