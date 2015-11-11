/*********************
Indicator
----------------------
For displaying numbers
in a circle, such as
notifications
**********************/

import React, { Component } from 'react';

import styles from './Indicator.scss';

export default class Indicator extends Component {

  render() {

  	let fillColour;
  	this.props.fillColour ? fillColour = 'ui-indicator--' + this.props.fillColour : fillColour = '';

  	let type;
  	this.props.type ? type = 'ui-indicator--' + this.props.type : type = '';

  	var className = 'ui-indicator' + ' ' + fillColour + ' ' + type;

    return (
    	<span className={className.trim()}>{this.props.children}</span>
    );
  }

};

Indicator.defaultProps = {
  fillColour: 'warning'
}