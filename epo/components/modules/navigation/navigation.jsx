import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './navigation.scss';

export default class Navigation extends Component {

  render() {

    return (
    	<nav className='vertical-navigation__toolbar'>

        <Link className="btn-primary" to="home">
            <i className="icon-global-nav"></i>
            <p>Workspace</p>
        </Link>

        <Link className="btn-dashboard" to="dashboard">
          EP 1432 17589
        </Link>

        <Link className="btn-task btn-content" to="content">
          <i className="icon-dossier-files"></i>
        </Link>

        <Link className="btn-back" to="home">
          <i className="icon-arrow_back"></i>
        </Link>

        <Link className="btn-task" to="analysis">
          <i className="icon-analyze"></i>
        </Link>

        <Link className="btn-task" to="search">
          <i className="icon-search2"></i>
        </Link>

        <Link className="btn-task" to="viewer">
          <i className="icon-file-stack"></i>
        </Link>

        <Link className="btn-task" to="office-actions">
          <i className="icon-mail2"></i>
        </Link>

      </nav>
    );
  }

};

// Scope the 'this' function to the router context
Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};
