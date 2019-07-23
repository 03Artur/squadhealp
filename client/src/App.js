/*
* CSS IMPORT
*
* */
/*
* BASE IMPORT
* */
import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path={paths.HOME} render={()=> <Home/>}/>
                <Route path={paths.LOGIN} render={() => <AuthorizationPage/>}/>
                <Route path={paths.SIGN_UP} render={() => <AuthorizationPage/>}/>

            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default App;
