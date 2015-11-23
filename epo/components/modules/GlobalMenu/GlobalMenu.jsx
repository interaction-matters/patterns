/*************************
Global Menu
--------------------------
A menu to switch between 
workspaces
**************************/

import React, { Component, PropTypes } from 'react';

// Styles
import styles from './GlobalMenu.scss';

// React 
import AppList from 'components/composites/AppList/AppList';
import Panel from 'components/elements/panel/panel';
import SearchForm from 'components/composites/searchForm/searchForm';
import ArrowListItem from 'components/composites/ArrowListItem/ArrowListItem';

export default class GlobalMenu extends Component {

  componentWillMount() {
    
  }

  componentDidMount() {
    // Reset global menu on click outside
    document.body.onclick = function (event) {
      // Where the click takes place
      var target = event.target;
      // Assign a large click area
      var elementRoot = document.querySelector('.wrapper');
      // If click occurs in this area && not on the global menu button...
      if ((elementRoot.contains(target) || target.className == "view") && target.className != ('menu-button__icon')) {
        // Reset menu
        this.props.toggleActions.toggleGlobalMenu('disabled');
        // Reset second-level (dossier) navigation
        this.props.toggleActions.toggleDossierMenu('disabled');
      };
      // Check only performs function on componentDidMount 
      console.log('body click event emitted');
    }.bind(this);
    // Reset global menu on ESC key
    window.onkeydown = function (event) {
      if ((event.keyCode === 27) && (this.props.globalMenuStatus !== 'disabled')) {
        // Reset menu
        this.props.toggleActions.toggleGlobalMenu('disabled');
        // Reset second-level (dossier) navigation
        this.props.toggleActions.toggleDossierMenu('disabled');
      };
    }.bind(this);
  }

  componentWillUnmount() {
    // Unbind body click event
    document.body.setAttribute ("onclick", null);
    // Unbind ESC key event
    document.body.setAttribute ("onkeydown", null);
  }

  render() {

    var iconStyle = {
      top: '2px',
      position: 'relative',
      marginRight: '2px'
    }

    let panelClassName;
    this.props.status == "active"
    ? panelClassName = "global-menu global-menu--" + this.props.status
    : panelClassName = "global-menu"    

    return (
      <div className={panelClassName}>
        <AppList {...this.props} />
        <ul className="global-menu__arrow-list"> 
          <ArrowListItem 
            dossierStatus={this.props.currentDossierStatus} 
            dossiers={this.props.dossiers} 
            className="previous" 
            onAddClick={this.props.dossierClick}>
            Currently opened dossiers
          </ArrowListItem>
          <ArrowListItem className="all">Previously viewed</ArrowListItem>
        </ul>
        <div className="global-menu__search-field">
          <SearchForm width="full" textPlaceholder="Enter a dossier number to search"/>
        </div>
        <div className="global-menu__settings">
          <h5>
            <a href="#">
              <i style={iconStyle} className="icon-settings2" /> Settings
            </a>
          </h5>
        </div>
      </div>
    )
  }

}

GlobalMenu.propTypes = {}
GlobalMenu.defaultProps = {}