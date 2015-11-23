/*******************************
Management Module Container
--------------------------------
Defines scaffolding for the 
management modules
********************************/

import React, {Component} from 'react';
import { connect } from 'react-redux';
 
// Sass dependencies
import styles from 'shared/styles/layout/_frames.scss';

// React dependencies
import Helpers from 'components/modules/helpers/helpers';
import Tray from 'components/modules/Tray/Tray';
import RouteHandler from 'components/elements/RouteHandler';

{/* This is the layout for Management Module pages. */}
export default class ManagementModule extends Component {
	render() {
		return (
			<div className="view">
				<Tray />
				{/* Trays will go here */}
				<RouteHandler className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					{this.props.children}
				</RouteHandler>
				<Helpers />
			</div>
		);
	}
}
