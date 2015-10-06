/************************
A basic link (anchor tag)
*************************/

import React, { Component } from 'react';

import styles from './uiBasicsLink.scss';

class UiBasicsLink extends Component {

  render() {
    return (
			<a href={this.props.linkTarget}>{this.props.children}</a>	
    );
  }

};

export default UiBasicsLink;