/*****************************
A Basic Button
------------------------------
HTML attributes:

- autofocus
- disabled
- name
- type [button, reset, submit]
- value

Params:

- Color
- Size
- Icon

******************************/

import React, { Component } from 'react';

import styles from './button.scss';

export default class Button extends Component {

  render() {

    // Colour of the button
    let colour = 'ui-button--' + this.props.colour;
    // Type of button [button, reset, submit]
    let role = this.props.role;
    // Width of button [default, wide, full]
    let width = 'ui-button--' + this.props.width;
    if (Boolean(this.props.width)) { width = 'ui-button--' + this.props.width } else { width = '' }
    // Size of button [small, smallest, default, large, largest]
    let size;
    if (Boolean(this.props.size)) { size = 'ui-button--' + this.props.size } else { size = '' }
    // Position of icon [left, right]
    let position;
    if (Boolean(this.props.position)) { position = 'ui-button__icon--' + this.props.position } else { position = '' }
    // Icon only, no text  
    let iconOnly;
    if (Boolean(this.props.iconOnly)) { iconOnly = 'ui-button__icon--icon-only' } else { iconOnly = '' }
    // Icon 
    let iconTag, icon;
    icon = this.props.icon;
    if (Boolean(this.props.icon)) {iconTag = <i className={'ui-button__icon' + ' ' + icon + ' ' + position + ' ' + iconOnly}></i>}

    // Remove whitespace from class definition
    var trimClass = 'ui-button' + ' ' + colour + ' ' + size + ' ' + width;
    
    return (

      this.props.disabled? <button type={role} className={trimClass.trim()} disabled><span>{iconTag}{this.props.children}</span></button> : 
                           <button type={role} className={trimClass.trim()}><span>{iconTag}{this.props.children}</span></button>
    );

  }

};

Button.defaultProps = {
  role: 'button',
  colour: 'default',
  iconOnly: false
}