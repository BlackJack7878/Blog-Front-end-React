import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Home from './Home/Home';
import About from './About/About';
import PostSingle from './PostSingle/PostSingle';
import UserSingle from './UserSingle/UserSingle';
import UserTodos from './UserTodos/UserTodos';

import './App.css';

import { store } from '../Store/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route path='/:page?' component={Home} exact />
              <Route path='/about' component={About} />
              <Route path='/post/:id' component={PostSingle} />
              <Route path='/user/:id/todos' component={UserTodos} />
              <Route path='/user/:id/posts/:page?' component={Home} />
              <Route path='/user/:id' component={UserSingle} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
