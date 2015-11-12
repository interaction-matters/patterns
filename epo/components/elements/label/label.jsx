/***************
A basic label
****************/

import React, { Component } from 'react';

import styles from './label.scss';

export default class Label extends Component {

  render() {

  	var className = 'ui-label ui-label--' + this.props.type;

    return (
    	<span className={className}>{this.props.children}</span>
    );
  }

};

Label.defaultProps = {
  type: 'default'
}