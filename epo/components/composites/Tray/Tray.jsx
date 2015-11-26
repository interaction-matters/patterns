/***************
Component name
****************/

import React, { Component, PropTypes } from 'react';

import styles from './Tray.scss';

export default class Tray extends Component {

  render() {

  	let className;
  	this.props.subTray == false
  		? className = 'tray'
  		: className = 'tray--subtray' 

    return (
    	<li>
			  <a onClick={this.props.onAddClick} className={className}>
			    <span className="tray__title">{this.props.trayTitle}</span>
			    {(this.props.urgent
			  			? <span className="tray__urgent-indicator"><span>{this.props.urgent}</span></span>
			  			: ''
			  	)}    
			    <span className="tray__total">
			    	{(this.props.unRead 
			    		? <span className="tray__total--unread">{this.props.unRead}/</span>
			    		: ''
			    	)}
			    	{this.props.total}
			    </span>
			  </a>
			</li>
    );
  }

};

Tray.propTypes = {
	subTray: React.PropTypes.bool,
	onAddClick: React.PropTypes.func.isRequired,
	trayTitle: React.PropTypes.string.isRequired,
	urgent: React.PropTypes.number,
	unRead: React.PropTypes.number,
	total: React.PropTypes.number
}

Tray.defaultProps = {
	subTray: false
}