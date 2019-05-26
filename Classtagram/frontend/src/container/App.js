import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './privateRoute';
import LoginPage from '../components/loginPage';
import RegisterPage from '../components/registerPage';
import MainPage from '../components/mainPage';
/*
import CoursePage from '../components/coursePage';
import ClassPage from '../components/classPage';
import StatPage from '../components/statPage';
import ManagePage from '../components/managePage';
*/
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact={true} component={MainPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <PrivateRoute path='/main' component={MainPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;