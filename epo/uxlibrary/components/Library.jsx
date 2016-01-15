import React, {Component} from 'react';
var Highlight = require('react-highlight');

// Sass dependencies
import styles from './Library.scss';

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import RouteHandler from 'components/utils/RouteHandler';
// Library components
import LibraryMenu from 'uxlibrary/components/LibraryMenu';

export default class Library extends Component {

  render() {

    return (
      <div className="library">
        {/* Menu */}
        <LibraryMenu />
        {/* Pass in library pages with react-router */}
        <RouteHandler className="library">
          {this.props.children}
        </RouteHandler>
        
      </div>
    );
  }

};
