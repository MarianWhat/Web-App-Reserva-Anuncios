import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ViewLogin from './components/pages/ViewLogin.jsx';
import ViewNewReserva from './components/pages/NewReserva';


const App = () => (
    <Router>
      <Switch/>
        <Route path="/" component={ViewLogin} exact/>
        <Route path="/new-reserva" component={ViewNewReserva} />
      <Switch/>
  </Router>
);

export default App;
