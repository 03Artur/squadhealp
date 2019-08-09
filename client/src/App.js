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

import TestPage from './pages/TestPage/TestPage'


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));

const App = (props) => {

    return (
        <UserLoader>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>

                        <AccessRoute exact roles={[ROLE.ADMIN]} path={PATH.ADMIN}
                                     render={(props) => <AdminPage {...props}/>}/>
                        <Route path={[PATH.LOGIN, PATH.SIGN_UP]}
                               render={(props) => <AuthorizationPage {...props}/>}/>
                        <Route path={PATH.TEST} render={(props) => <TestPage {...props}/>}/>

                        <Route path={PATH.HOME} render={(props) => <HomePage {...props}/>}/>
                    </Switch>
                </Suspense>
            </Router>
        </UserLoader>
    );
};

export default App;
