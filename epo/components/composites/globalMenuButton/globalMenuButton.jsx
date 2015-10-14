/********************************
Global menu navigation button 
---------------------------------
Global button which switches 
between available 'trays'
*********************************/

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './globalMenuButton.scss';

export default class GlobalMenuButton extends Component {

	render() {

		let className = 'global-menu global-menu--' + this.props.trayId;

    return (

			<Link className={className} to="home">
					{/* Home button */}
          <i className="icon-global-nav"></i>
        	{/* Module Identifier */}
          <span>{this.props.children}</span>
      </Link>
    );
  }
}

GlobalMenuButton.defaultProps = {
	trayId: 'workspace'
}