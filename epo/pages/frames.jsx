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

export class Frame extends Component {
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

export class AltLayout extends Component {
	render() {
		return (
			<div className="view">
				
				<div className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					<RouteHandler {...this.props}/>
				</div>

			</div>
		);
	}
}
