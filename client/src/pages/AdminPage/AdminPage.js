import React from 'react';
import {Switch, Route} from 'react-router-dom'

/*
* COMPONENTS
* */
import AdminUserList from "../../components/AdminUserList/AdminUserList";
import {PATH} from "../../constants";

const AdminPage = props => {


    return (
        <div>
            <Switch>
                <Route path={`${PATH.ADMIN}${PATH.USERS}`} render={(props) => (<AdminUserList {...props} />)}/>
            </Switch>
        </div>
    )

}


export default AdminPage;



