import React from 'react';
import logo from './logo.svg';
import Main from './pages/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
        <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
