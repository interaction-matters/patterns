/************************
A basic link (anchor tag)
*************************/

import React, { Component } from 'react';

import styles from './link.scss';

export default class TextLink extends Component {

  render() {
    return (
			<a href={this.props.linkTarget}>{this.props.children}</a>	
    );
  }

};