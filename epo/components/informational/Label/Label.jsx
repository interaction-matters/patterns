/***************
A basic label
****************/

import React, { Component } from 'react';

import styles from './Label.scss';

export default class Label extends Component {

  render() {

  	let type;
  	this.props.type ? type = 'ui-label--' + this.props.type : type = ''

  	let role;
  	this.props.role ? role = 'ui-label--' + this.props.role : role = ''

  	let style;
  	this.props.style ? style = 'ui-label--' + this.props.style : style = ''

  	let size;
  	this.props.size ? size = 'ui-label--' + this.props.size : size = ''

  	let className = 'ui-label' + ' ' + type + ' ' + style + ' ' + role + ' ' + size;

  	var trimClass = className.trim();

    return (
    	<span className={trimClass}>{this.props.children}</span>
    );
  }

};

Label.defaultProps = {
  
}