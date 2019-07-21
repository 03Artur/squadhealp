/*
* CSS IMPORT
*
* */
/*
* BASE IMPORT
* */
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*
* CONSTANTS IMPORT
* */
import paths from './constants/paths';
import {AUTHORIZATION_MODE} from './constants';
/*
* COMPONENTS IMPORT
* */
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const Home = lazy(() => import('./pages/HomePage/Home'));


const App = (props) => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={paths.HOME} render={()=> <Home/>}/>
                <Route path={paths.LOGIN} render={() => <AuthorizationPage mode={AUTHORIZATION_MODE.LOGIN_MODE}/>}/>
                <Route path={paths.SIGN_UP} render={() => <AuthorizationPage mode={AUTHORIZATION_MODE.SIGN_UP_MODE}/>}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;
