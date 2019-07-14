import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import paths from './constants/paths';
import Home from './pages/Home/Home'

const App = (props) => (
    <Router>
        <Switch>
            <Route exact path={paths.HOME} component={Home}/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
        </Switch>
    </Router>
);

export default App;
