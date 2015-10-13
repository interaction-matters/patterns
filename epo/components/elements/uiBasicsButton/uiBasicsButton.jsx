/*****************************
A basic button
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

import styles from './uiBasicsButton.scss';

export default class UiBasicsButton extends Component {

  render() {

    // Colour of the button
    let buttonColour = 'ui-button--' + this.props.buttonColour;
    // Type of button [button, reset, submit]
    let buttonType = this.props.buttonType;
    // Width of button [default, wide, full]
    let buttonWidth = 'ui-button--' + this.props.buttonWidth;
    if (Boolean(this.props.buttonWidth)) { buttonWidth = 'ui-button--' + this.props.buttonWidth } else { buttonWidth = '' }
    // Size of button [small, smallest, default, large, largest]
    let buttonSize;
    if (Boolean(this.props.buttonSize)) { buttonSize = 'ui-button--' + this.props.buttonSize } else { buttonSize = '' }
    // Position of icon [left, right]
    let iconPlacement;
    if (Boolean(this.props.iconPlacement)) { iconPlacement = 'ui-button__icon--' + this.props.iconPlacement } else { iconPlacement = '' }
    // Icon only, no text  
    let iconOnly;
    if (Boolean(this.props.iconOnly)) { iconOnly = 'ui-button__icon--icon-only' } else { iconOnly = '' }
    // Icon 
    let iconTag, icon;
    icon = this.props.icon;
    if (Boolean(this.props.icon)) {iconTag = <i className={'ui-button__icon' + ' ' + icon + ' ' + iconPlacement + ' ' + iconOnly}></i>}

    // Remove whitespace from class definition
    var trimClass = 'ui-button' + ' ' + buttonColour + ' ' + buttonSize + ' ' + buttonWidth;
    
    return (

      this.props.disabled? <button type={buttonType} className={trimClass.trim()} disabled><span>{iconTag}{this.props.children}</span></button> : 
                           <button type={buttonType} className={trimClass.trim()}><span>{iconTag}{this.props.children}</span></button>
    );

  }

};

UiBasicsButton.defaultProps = {
  buttonType: 'button',
  buttonColour: 'default',
  iconOnly: false
}