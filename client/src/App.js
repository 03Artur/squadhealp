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
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const Home = lazy(() => import('./pages/HomePage/Home'));






const App = (props) => (
    <Router history ={history}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={paths.HOME} render={(props)=> <Home {...props}/>}/>
                <Route path={paths.LOGIN} render={(props) => <AuthorizationPage isLoginMode={true} {...props}/>}/>
                <Route path={paths.SIGN_UP} render={(props) => <AuthorizationPage isLoginMode = {false} {...props}/>}/>

            </Switch>
        </Suspense>
    </Router>
);


export default App;
