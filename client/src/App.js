import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import paths from './constants/paths';
import Login from './pages/Login/Login';

const Home = lazy(() => import('./pages/Home/Home'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));

const App = (props) => (
    <Router>
        <Suspense fallback = {<div>Loading...</div>}>
            <Switch>
                {/*<Route exact path={paths.HOME} component={Home}/>*/}
                <Route path={paths.LOGIN} component={Login}/>
                {/*<Route path={paths.SIGN_UP} component={SignUp}/>*/}

            </Switch>
        </Suspense>
    </Router>
);

export default App;
