/************
A basic panel
*************/

import React, { Component } from 'react';

import styles from './Panel.scss';

export default class Panel extends Component {

  render() {

  	let panelType;
  	this.props.panelType ? panelType = 'ui-panel--' + this.props.panelType : panelType = 'ui-panel--default'

    return (
			<div className={'ui-panel' + ' ' + panelType + ' ' + this.props.panelName}>
				<div className='ui-panel__panel-inner'>{this.props.children}</div>
			</div>	
    );
  }

};