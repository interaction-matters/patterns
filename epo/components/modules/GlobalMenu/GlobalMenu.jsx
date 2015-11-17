/*************************
Global Menu
--------------------------
A menu to switch between 
workspaces
**************************/

import React, { Component, PropTypes } from 'react';

// Utility functions
import getPosition from 'shared/functions/utils.js';

// Styles
import styles from './GlobalMenu.scss';

// React 
import AppList from 'components/composites/AppList/AppList';
import Panel from 'components/elements/panel/panel';
import SearchForm from 'components/composites/searchForm/searchForm';
import ArrowListItem from 'components/composites/ArrowListItem/ArrowListItem';

export default class GlobalMenu extends Component {

  componentDidMount() {
    let myElement = document.querySelector(".arrow-list-item--previous");
    let position = getPosition(myElement);
    let parent = document.querySelector(".global-menu__arrow-list");
    let parentWidth = parent.offsetWidth;
    console.log("The div is located at: " + position.x + ", " + position.y + "and class name is " + myElement + "and width is " + parentWidth);
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
      <div>
        <div className={panelClassName}>
          <AppList {...this.props} />
          <ul className="global-menu__arrow-list"> 
            <ArrowListItem dossierStatus={this.props.currentDossierStatus} dossiers={this.props.dossiers} className="previous" onAddClick={this.props.dossierClick}>Currently opened dossiers</ArrowListItem>
            <ArrowListItem className="all">Previously viewed</ArrowListItem>
          </ul>
          <br />
          <SearchForm width="full" textPlaceholder="Enter a dossier number to search"/>
          <hr />
          <h5><i style={iconStyle} className="icon-settings2" /> Settings</h5>
        </div>
           
      </div>
    )
  }

}

GlobalMenu.propTypes = {}
GlobalMenu.defaultProps = {}