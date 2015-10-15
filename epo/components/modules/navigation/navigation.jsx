/********************************
Main Navigation
---------------------------------
A vertical navigation module, for
the global menu/navigation
*********************************/

import React, { Component } from 'react';

import styles from './navigation.scss';

import { Link } from 'react-router';
import GlobalMenuButton from 'components/composites/globalMenuButton/globalMenuButton';

export default class Navigation extends Component {

  render() {

    /* Determine which 'workspace' 
    ** Try changing to 'work-manager'
    */
    
    let currentWorkspace = 'workspace';

    return (
    	<nav className={'nav nav--vertical nav--' + currentWorkspace}>

        <div className="nav-header">
          /* Determines which 'home' button is displayed */
          <GlobalMenuButton trayId={currentWorkspace}>
            Work manager
          </GlobalMenuButton>

          <Link to="dashboard" className="nav-header__dossier-identifier">
            EP 1432 17589
          </Link>

          <Link to="content" className="nav-header__dossier-content">
            <i className="icon-dossier-files"></i>
          </Link>

          <Link to="home" className="nav-header__back-btn">
            <i className="icon-arrow_back"></i>
          </Link>
        </div>

        <div className="nav-list">
          {/* These menu items will be mapped from an array */}
          <div className="nav-list__scroll">
            <Link to="analysis" className="nav-list__item">
              <i className="icon-analyze"></i>
            </Link>

            <Link to="search" className="nav-list__item">
              <i className="icon-search2"></i>
            </Link>

            <Link to="viewer" className="nav-list__item">
              <i className="icon-file-stack"></i>
            </Link>

            <Link to="office-actions" className="nav-list__item">
              <i className="icon-mail2"></i>
            </Link>

            <Link to="analysis" className="nav-list__item">
              <i className="icon-analyze"></i>
            </Link>

            <Link to="search" className="nav-list__item">
              <i className="icon-search2"></i>
            </Link>

            <Link to="viewer" className="nav-list__item">
              <i className="icon-file-stack"></i>
            </Link>

            <Link to="office-actions" className="nav-list__item">
              <i className="icon-mail2"></i>
            </Link>
          </div>
        </div>

        <div className="nav-toolbar">
        {/* Print/font-size etc */}
        </div>

      </nav>
    );
  }

};

// Scope the 'this' function to the router context
Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};
