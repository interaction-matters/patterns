import React, {Component} from 'react';
import { RouteHandler } from 'react-router';

// Sass dependencies
import styles from './basic.scss';

// React dependencies
import Navigation from 'modules/navigation/navigation';
import Helpers from 'modules/helpers/helpers';

export default class Basic extends Component {
	render() {
		return (
			<div className="view">
				{/* Main navigation */}
				<div className="vertical-navigation">
					<Navigation />
				</div>
				{/* Routes */}
				<div className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					<RouteHandler {...this.props}/>
				</div>
				{/* Helpers */}
				<div className="helpers">
					<Helpers />
				</div>
			</div>
		);
	}
}
