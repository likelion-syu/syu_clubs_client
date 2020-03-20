import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import MainScene from './scenes/MainScene';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Router>
      <Route exact path="/" component={MainScene}/>
      <Route path="/second" component={App}/>
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();