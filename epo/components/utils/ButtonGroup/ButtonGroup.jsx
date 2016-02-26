/*******************************
A toolbar for displaying buttons
********************************/

import React, { Component } from 'react';

import styles from './ButtonGroup.scss';

class ButtonGroup extends Component {

  render() {
    return (
			<div className='ui-button-group'>{this.props.children}</div>	
    );
  }

};

export default ButtonGroup;