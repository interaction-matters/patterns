/************************
Tray Tabs Bar
-------------------------
Tabs component for a 
trays module. Comprises
two tabs with anchor text
*************************/

import React, { Component } from 'react';

import styles from './TrayTabs.scss';

export default class TrayTabs extends Component {

	render() {
		return(
			<div className="tray-tabs">
			  <h3 className="tray-tabs__tab is-active"><a href="#">{this.props.tabOneTitle}</a></h3>
			  <h3 className="tray-tabs__tab"><a href="#">{this.props.tabTwoTitle}</a></h3>
			</div>
		)
	}

};