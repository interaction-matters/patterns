/********************************
Global menu navigation button 
---------------------------------
Global button which switches 
between available 'trays'
*********************************/

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './MenuButton.scss';

export default class MenuButton extends Component {

	render() {

		let className = 'menu-button menu-button--' + this.props.size + ' ' + 'menu-button--' + this.props.colour;

    return (

			<Link className={className} to="home">
					{/* Home button */}
          <i className="menu-button__icon icon-global-nav"></i>
      </Link>
    );
  }
}

MenuButton.defaultProps = {
	colour: 'workspace',
  size: 'default'
}