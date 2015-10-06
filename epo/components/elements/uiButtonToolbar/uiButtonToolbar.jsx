/*******************************
A toolbar for displaying buttons
********************************/

import React, { Component } from 'react';

import styles from './uiButtonToolbar.scss';

class UiButtonToolbar extends Component {

  render() {
    return (
			<div className='button-toolbar'>{this.props.children}</div>	
    );
  }

};

export default UiButtonToolbar;