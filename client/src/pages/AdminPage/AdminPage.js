import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* COMPONENTS
* */
import AdminUserList from "../../components/AdminUserList/AdminUserList";
import {PATH} from "../../constants";
import DocumentTitle from 'react-document-title';

const AdminPage = props => {


    return (
        <div>
            <DocumentTitle title="Admin"/>

            <Switch>
                <Route path={`${PATH.ADMIN}${PATH.USERS}`} render={(props) => (<AdminUserList {...props} />)}/>
            </Switch>
        </div>
    )

}


export default AdminPage;



