/********************************
Global Navigation
---------------------------------
A vertical navigation module, for
the global menu/navigation
*********************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './GlobalNavigation.scss';

import { Link } from 'react-router';

import MenuButton from 'components/composites/MenuButton/MenuButton';
import IconToolbar from 'components/composites/IconToolbar/IconToolbar';

export default class Navigation extends Component {

  render() {

    {/* Determine which 'workspace' 
    ** Try changing to 'work-manager'
    */}   
    let currentWorkspace = 'workspace';

    return (
    	<nav className={'nav nav--vertical nav--' + currentWorkspace}>

        <div className="nav-header">
          {/* Determines which 'home' button is displayed */}
          <MenuButton {...this.props} size="large" />
          {/* Module Identifier */}
          <span className="nav-header__module-identifier">{currentWorkspace}</span>

          <Link to={`/workspace/dashboard`} className="nav-header__dossier-identifier">
            EP 1432 17589
          </Link>

          <Link to="/workspace/content" className="nav-header__dossier-content">
            <i className="icon-dossier-files"></i>
          </Link>

          <Link to={`/workspace/home`} className="nav-header__back-btn">
            <i className="icon-arrow_back"></i>
          </Link>
        </div>

        <IconToolbar resetClick={this.props.resetClick} type="main" toolbarItems={this.props.toolbarItems} />

        <IconToolbar resetClick={this.props.resetClick} type="helpers" toolbarItems={this.props.helperItems}>
        {/* Print/font-size etc */}
        </IconToolbar>

      </nav>
    );
  }

};

// Scope the 'this' function to the router context
/*Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};*/
