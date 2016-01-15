/*****************
A Badge
------------------
A big square label
******************/

import React, { Component } from 'react';

import styles from './Badge.scss';

export default class Badge extends Component {

  render() {

  	let className;
  	this.props.type ? className = 'ui-badge ui-badge--' + this.props.type
  									: className = 'ui-badge'

    return (
    	<span className={className}>{this.props.children}</span>
    );
  }

};

Badge.defaultProps = {
  type: 'default'
}