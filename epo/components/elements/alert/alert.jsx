/***************
A basic alert
****************/

import React, { Component } from 'react';

import styles from './alert.scss';

export default class Alert extends Component {

  render() {

  	var className = 'ui-alert ui-alert--' + this.props.type;

    return (
    	<div className={className}>{this.props.children}</div>
    );
  }

};