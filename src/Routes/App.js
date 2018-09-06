import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './Home/Home';
import About from './About/About';
import PostSingle from './PostSingle/PostSingle';

import './App.css';

import { store } from '../Store/store';
import { getPosts } from '../Store/Actions/actionTypes';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/post/:id' component={PostSingle} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
