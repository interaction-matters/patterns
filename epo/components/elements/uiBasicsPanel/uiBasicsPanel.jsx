/************
A basic panel
*************/

import React, { Component } from 'react';

import styles from './uiBasicsPanel.scss';

export default class UiBasicsPanel extends Component {

  render() {
    return (
			<div className={'ui-basics-panel' + ' ' + this.props.containerName}>
				<div className='ui-basics-panel__panel-inner'>{this.props.children}</div>
			</div>	
    );
  }

};