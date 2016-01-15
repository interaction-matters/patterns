/*******************************
Root Container
--------------------------------
Defines scaffolding for our app
********************************/

import React, {Component} from 'react';
import { connect } from 'react-redux';
 
// Sass dependencies
import styles from 'shared/styles/layout/_frames.scss';

// React dependencies
import RouteHandler from 'components/utils/RouteHandler'

{/* This is the root-level '/' route. */}
export default class Root extends Component {
	render() {
		return (
			<RouteHandler className="App">
				{this.props.children}
			</RouteHandler>
		);
	}
}