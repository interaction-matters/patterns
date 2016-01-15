/*******************************
A toolbar for displaying buttons
********************************/

import React, { Component } from 'react';

import styles from './ButtonToolbar.scss';

class ButtonToolbar extends Component {

  render() {
    return (
			<div className='ui-button-toolbar'>{this.props.children}</div>	
    );
  }

};

export default ButtonToolbar;