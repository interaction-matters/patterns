/*******************************
Frame
--------------------------------
Defines scaffolding for our app
********************************/

import React, {Component} from 'react';
import { RouteHandler } from 'react-router';

// Sass dependencies
import styles from './frames.scss';

// React dependencies
import Navigation from 'components/modules/navigation/navigation';
import Helpers from 'components/modules/helpers/helpers';

{/* This is the root-level '/' route. */}
export class App extends Component {
	render() {
		return (
			<div className="view">
					<RouteHandler {...this.props}/>
			</div>
		);
	}
}
{/* This is the layout for Workspace pages. */}
export class Workspace extends Component {
	render() {
		return (
			<div className="view">
				{/* Main navigation */}
				<Navigation />
				{/* Routes */}
				<div className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					<RouteHandler {...this.props}/>
				</div>
				{/* Helpers */}
				<Helpers />
			</div>
		);
	}
}
{/* This is the layout for Management Module pages. */}
export class ManagementModule extends Component {
	render() {
		return (
			<div className="view">
				{/* Trays will go here */}
				<div className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					<RouteHandler {...this.props}/>
				</div>
				<Helpers />
			</div>
		);
	}
}
