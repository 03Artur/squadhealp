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
import {PATH, ROLE} from "./constants"
import Test from "./pages/TestPage/TestPage";
/*
* COMPONENTS IMPORT
* */
import AccessRoute from './components/routes/AccessRoute/AccessRoute';
import UserLoader from "./components/UserLoader/UserLoader";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));
const StartContestPage = lazy(() => import('./pages/StartContestPage/StartContestPage'));


const App = (props) => (
    <UserLoader>
        <Router history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path={PATH.HOME} render={(props) => <HomePage {...props}/>}/>
                    <Route path={PATH.LOGIN} render={(props) => <AuthorizationPage {...props}/>}/>
                    <Route path={PATH.SIGN_UP} render={(props) => <AuthorizationPage {...props}/>}/>
                    <AccessRoute roles={[ROLE.ADMIN]} path={PATH.ADMIN} render={(props) => <AdminPage {...props}/>}/>
                    <AccessRoute roles={[ROLE.BUYER,ROLE.ADMIN]} path={PATH.START_CONTEST} render={(props) => <StartContestPage {...props}/>}/>
                    <Route path={'/test'} render={(props) => <Test {...props}/>}/>
                </Switch>
            </Suspense>
        </Router>
    </UserLoader>
);

export default App;
