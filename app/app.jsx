import React, {Component} from 'react';
import Router from 'react-router';

// Here, we import all of our base styles
import styles from './app.scss';

import routes from './config/routes';

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.querySelector("#myApp"));
});