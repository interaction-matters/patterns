import React, { Component } from 'react';

import styles from './uiBasicsButton.scss';

export default class UiBasicsButton extends Component {

  render() {

    /*buttonVariables (propTypes) {
      type: ['emphasis', 'animated', 'icon', 'labeled', ],
      variations: ['colour', 'size', 'fluid', 'circle']
      position: ['left', 'right'],
      state: ['active', 'disabled', 'loading']
    }*/

    /*if (this.props.labelType == 'taBadge') { className = styles.taBadge }
    else if (this.props.labelType == 'statusGranted') { className = styles.statusGranted }
    else if (this.props.labelType == 'statusPending') { className = styles.statusPending }
    else if (this.props.labelType == 'statusRefused') { className = styles.statusRefused }
    else { className = styles.label }*/

    return (
      <Button className={'ui-basics-button' + ' ' + this.props.buttonStyle}>{this.props.children}</Button>
    );

  }

};