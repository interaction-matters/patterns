/*******************************
App
--------------------------------
Top level ‘controller’ component
********************************/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Here, we import all of our base styles
import styles from './app.scss';

// Import route definitions from epo > config > routes.jsx
import routes from 'config/routes';
import createHashHistory from 'history/lib/createHashHistory';

// Store config
import configureStore from 'store/store';

// Create the store
let store = configureStore();

console.log(store.getState());

// Set history var
let history = createHashHistory()
// Rather than rendering a component to screen, tell the router
// which route to pass
/*Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.querySelector("#myApp"));
});*/

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>, 
	document.querySelector("#myApp")
);