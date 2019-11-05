import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';
import ViewHome from './components/pages/ViewHome.jsx';


const App = () => (
    <Router>
      <Switch>
      <Route path="/" component={ViewLogin} exact />
        <Route path="/Home" component={ViewHome} />
      </Switch>
    </Router>
);

export default App;
