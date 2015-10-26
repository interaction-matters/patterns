/*******************************
App
--------------------------------
Top level ‘controller’ component
********************************/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// Here, we import all of our base styles
import styles from './app.scss';

// Import route definitions from epo > config > routes.jsx
import routes from './config/routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Set history var
let history = createBrowserHistory()
// Rather than rendering a component to screen, tell the router
// which route to pass
/*Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.querySelector("#myApp"));
});*/

ReactDOM.render(<Router history={history}>{routes}</Router>, document.querySelector("#myApp"));