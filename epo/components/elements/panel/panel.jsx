/************
A basic panel
*************/

import React, { Component } from 'react';

import styles from './panel.scss';

export default class Panel extends Component {

  render() {
    return (
			<div className={'ui-panel' + ' ' + this.props.panelName}>
				<div className='ui-panel__panel-inner'>{this.props.children}</div>
			</div>	
    );
  }

};