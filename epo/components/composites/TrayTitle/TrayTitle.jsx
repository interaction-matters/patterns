/************************
Tray Title Bar
-------------------------
Title bar component for 
a trays module. Comprises
a global menu button and
a title (h2)
*************************/

import React, { Component } from 'react';

import styles from './TrayTitle.scss';

export default class TrayTitle extends Component {

	render() {
		return(
			<div className="tray-group-title">
		  	<a onClick={this.props.onAddClick} className="tray-group-title__menu-button">
		  		<i className="icon-global-nav"></i>
		  	</a>
		  	<h1 className="tray-group-title__title">{this.props.children}</h1>
			</div>
		)
	}

};

		