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
import Helpers from 'components/modules/Helpers/Helpers';
import TraysModule from 'components/modules/TraysModule/TraysModule';
import RouteHandler from 'components/elements/RouteHandler';

{/* This is the layout for Management Module pages. */}
export default class ManagementModule extends Component {
	render() {
		return (
			<div className="view">
				{
					/* 
					** Eventually, this will read the url (hash)
					** to determine which tray module is shown, but 
					** for now we will add it manually. Could also
					** read the route from state with redux-router
					*/
				}
				<TraysModule module="work-manager" title="Work Manager" />

				<RouteHandler className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					{this.props.children}
				</RouteHandler>
				<Helpers />
			</div>
		);
	}
}
