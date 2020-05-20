import React, { Component } from 'react';
import Register from './Register';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyBooks from './MyBooks';

export default class App extends Component {
  render() {
    return (
      // <div>
      <div className='app'>
        {/* <Register />
        </div> */}
        
        {/* <div> */}
        <BrowserRouter>
        <Switch>
        <Route
          exact
          path='/'
          render={props => (
            <Register
            {...props}
            />
          )}
          />
          <Route
          path='/my-books'
          render={props => (
            <MyBooks
            {...props}
            />
          )}
          />
        </Switch>
        </BrowserRouter>
      </div>
      // {/* </div> */}
    );
  }
}
