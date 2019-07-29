/*
* CSS IMPORT
*
* */

/*
* BASE IMPORT
* */
import React, {Suspense, lazy} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
/*
* CONSTANTS IMPORT
* */
import {PATH} from './constants';
import Test from "./pages/TestPage/TestPage";
/*
* COMPONENTS IMPORT
* */

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));


const App = (props) => (
    <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={PATH.HOME} render={(props) => <HomePage {...props}/>}/>
                <Route path={PATH.LOGIN} render={(props) => <AuthorizationPage {...props}/>}/>
                <Route path={PATH.SIGN_UP} render={(props) => <AuthorizationPage {...props}/>}/>
                <Route path={PATH.ADMIN} render={(props) => <AdminPage {...props}/>}/>
                <Route path={'/test'} render={(props) => <Test {...props}/>}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
