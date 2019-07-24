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
import paths from './constants/paths';
/*
* COMPONENTS IMPORT
* */
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));






const App = (props) => (
    <Router history ={history}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={paths.HOME} render={(props)=> <HomePage {...props}/>}/>
                <Route path={paths.LOGIN} render={(props) => <AuthorizationPage isLoginMode={true} {...props}/>}/>
                <Route path={paths.SIGN_UP} render={(props) => <AuthorizationPage isLoginMode = {false} {...props}/>}/>
                <Route path={paths.ADMIN} render={(props) => <AdminPage {...props}/>}/>
            </Switch>
        </Suspense>
    </Router>
);


export default App;
