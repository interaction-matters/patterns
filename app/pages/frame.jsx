/*******************************
Frame
--------------------------------
Default scaffold for /index app
********************************/

import React, {Component} from 'react';
import { RouteHandler } from 'react-router';

// Sass dependencies
import styles from './frame.scss';

// React dependencies
import Navigation from 'modules/navigation/navigation';
import Helpers from 'modules/helpers/helpers';

export default class Frame extends Component {
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
