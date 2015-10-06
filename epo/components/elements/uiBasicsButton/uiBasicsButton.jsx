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

    return (
      <button className={'ui-basics-button' + ' ' + 'ui-basics-button--' + this.props.buttonColour}>{this.props.children}</button>
    );

  }

};