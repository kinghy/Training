import React, { Component } from 'react';
import './App.css';
import Login from './login/login'
import Board from './board/board'
import {Route, browserHistory, Router} from 'react-router'


class App extends Component {
  render() {
    return (
        <div>
            <Router history={browserHistory}>
                <Route path="/"  component={Login}/>
                <Route path="/board" component={Board}/>
            </Router>
        </div>
    );
  }
}


export default App;
