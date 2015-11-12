/*************************
Icon Toolbar
--------------------------
A component for displaying
a menu of icons with links
**************************/

import React, { Component } from 'react';

import styles from './IconToolbar.scss';

import { Link } from 'react-router';

export default class IconToolbar extends Component {

  render() {

    var toolbarItems = this.props.toolbarItems.map((toolbarItem, index) => {
      return <li key={index} className="icon-toolbar__item"> 
                <Link to={toolbarItem.target} onClick={this.props.resetClick}>
                  <i className={toolbarItem.icon} />
                </Link>
             </li>
    });

    return (
      
      <ul className={'icon-toolbar' + ' icon-toolbar--' + this.props.type}>
        {toolbarItems}
      </ul>
    )
  }

}

IconToolbar.defaultProps = {
  type: 'default'
}