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

    let buttonColour = 'ui-button--' + this.props.buttonColour;

    let buttonSize;
    if (Boolean(this.props.buttonSize)) { buttonSize = 'ui-button--' + this.props.buttonSize }

    let iconPlacement;
    if (Boolean(this.props.iconPlacement)) { iconPlacement = 'ui-button__icon--' + this.props.iconPlacement } else { iconPlacement = '' }

    let iconOnly;
    if (Boolean(this.props.iconOnly)) { iconOnly = 'ui-button__icon--icon-only' } else { iconOnly = '' }

    let iconTag, icon;
    icon = this.props.icon;
    if (Boolean(this.props.icon)) {iconTag = <i className={'ui-button__icon' + ' ' + icon + ' ' + iconPlacement + ' ' + iconOnly}></i>}

    return (
      this.props.disabled? <button className={'ui-button' + ' ' + buttonColour + ' ' + buttonSize} disabled>{iconTag}{this.props.children}</button> : 
                           <button className={'ui-button' + ' ' + buttonColour + ' ' + buttonSize}>{iconTag}{this.props.children}</button>
    );

  }

};

UiBasicsButton.defaultProps = {
  buttonColour: 'default',
  iconPlacement: 'left',
  iconOnly: false
}