/*******************************
App
--------------------------------
Top level ‘controller’ component.
One component to rule them all.
********************************/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { Provider } from 'react-redux';

// Import all of our base styles
import styles from './app.scss';

// Import route definitions from epo > config > routes.jsx
import routes from 'config/routes';

// Router history
import createHashHistory from 'history/lib/createHashHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Store config
import configureStore from 'store/store';

// Create the store
let store = configureStore();

console.log("State on init: " + store.getState());

// Set history var
let history;
if (process.env.NODE_ENV !== 'build') {
	let history = createHashHistory()
} else {
	let history = createBrowserHistory()
}

// Render the app at root level
ReactDOM.render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>, 
	document.querySelector("#myApp")
);