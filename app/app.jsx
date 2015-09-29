/*******************************
App
--------------------------------
Top level ‘controller’ component
********************************/

import React, {Component} from 'react';
import { Router, RouteHandler } from 'react-router';

// Here, we import all of our base styles
import styles from './app.scss';

// Import route definitions from app > config > routes.jsx
import routes from './config/routes';

// Rather than rendering a component to screen, tell the router
// which route to pass
Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.querySelector("#myApp"));
});