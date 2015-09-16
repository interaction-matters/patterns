import React, { Component } from 'react';

import styles from './uiBasicsLabel.scss';

export default class UiBasicsLabel extends Component {

  render() {

  	var className = this.props.labelType;

  	if (this.props.labelType == 'taBadge') { className = styles.taBadge }
  	else if (this.props.labelType == 'statusGranted') { className = styles.statusGranted }
  	else if (this.props.labelType == 'statusPending') { className = styles.statusPending }
  	else if (this.props.labelType == 'statusRefused') { className = styles.statusRefused }
  	else { className = styles.label }

    return (
    	<span className={className}>{this.props.children}</span>
    );
  }

};