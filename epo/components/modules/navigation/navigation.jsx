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

    return (
    	<nav className='vertical-nav vertical-nav--work-manager'>

        <div className="vertical-nav-header">
          <GlobalMenuButton trayId="work-manager">
            Work manager
          </GlobalMenuButton>

          <Link to="dashboard" className="vertical-nav-header__dossier-identifier">
            EP 1432 17589
          </Link>

          <Link to="content" className="vertical-nav-header__dossier-content">
            <i className="icon-dossier-files"></i>
          </Link>

          <Link to="home" className="vertical-nav-header__back-btn">
            <i className="icon-arrow_back"></i>
          </Link>
        </div>

        <div className="vertical-nav-toolbar">
          {/* These menu items will be mapped from an array */}
          <Link to="analysis" className="btn-task">
            <i className="icon-analyze"></i>
          </Link>

          <Link to="search" className="btn-task">
            <i className="icon-search2"></i>
          </Link>

          <Link to="viewer" className="btn-task">
            <i className="icon-file-stack"></i>
          </Link>

          <Link to="office-actions" className="btn-task">
            <i className="icon-mail2"></i>
          </Link>
        </div>

        <div className="vertical-nav-footer">
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
