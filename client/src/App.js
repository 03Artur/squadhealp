import React, {Suspense, lazy} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import {PATHS, ROLES} from "./constants"
import AccessRoute from './components/routes/AccessRoute/AccessRoute';
import UserLoader from "./components/UserLoader/UserLoader";
import AuthorizedRoute from "./components/routes/AuthorizedRoute/AuthorizedRoute";
import Test from "./pages/TestPage/TestPage";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AuthorizationPage = lazy(() => import("./pages/AuthorizationPage/AuthorizationPage"));
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));
const AffiliateDashboard = lazy(() => import('./pages/AffiliateDashboard/AffiliateDashboard'));
const ChatPage = lazy(() => import('./pages/ChatPage/ChatPage'));


const App = (props) => {

    return (
        <UserLoader>
            <Router history={history}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <AuthorizedRoute path={PATHS.MESSAGES}
                                         render={props => <ChatPage {...props}/>}/>
                        <AccessRoute exact roles={[ROLES.ADMIN]} path={PATHS.ADMIN}
                                     render={(props) => <AdminPage {...props}/>}/>
                        <Route path={[PATHS.LOGIN, PATHS.SIGN_UP]}
                               render={(props) => <AuthorizationPage {...props}/>}/>
                        <AuthorizedRoute path={PATHS.AFFILIATE_DASHBOARD}
                                         render={(props) => <AffiliateDashboard {...props}/>}/>
                        <Route path={PATHS.TEST}
                               render={(props) => <Test {...props}/>}/>
                        <Route path={PATHS.HOME}
                               render={(props) => <HomePage {...props}/>}/>
                    </Switch>
                </Suspense>
            </Router>
        </UserLoader>
    );
};

export default App;
