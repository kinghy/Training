import React, { Component } from 'react';
import './App.css';
import Login from './login/login'
import {Route, IndexRoute, browserHistory, Router} from 'react-router'

class App extends Component {
  render() {
    return (
        <div>
            <Router history={browserHistory}>
                <Route path="/"  component={Login}>
                </Route>
            </Router>
            <Login></Login>
        </div>
    );
  }
}

export default App;
