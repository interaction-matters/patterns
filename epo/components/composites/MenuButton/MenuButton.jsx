/****************************
Global menu navigation button 
-----------------------------
Global button which switches 
between available 'trays'
*****************************/

import React, { Component } from 'react';

import styles from './MenuButton.scss';

export default class MenuButton extends Component {

	render() {

		let className = 'menu-button menu-button--' + this.props.size + ' ' + 'menu-button--' + this.props.colour;

    return (

			<a onClick={this.props.onAddClick} className={className}>
					{/* Home button */}
          <i className="menu-button__icon icon-global-nav"></i>
      </a>
    );
  }
}

MenuButton.defaultProps = {
	colour: 'workspace',
  size: 'default'
}