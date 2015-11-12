/*************************
Global Menu
--------------------------
A menu to switch between 
workspaces
**************************/

import React, { Component, PropTypes } from 'react';

import styles from './GlobalMenu.scss';

import AppList from 'components/composites/AppList/AppList';
import Panel from 'components/elements/Panel/Panel';
import SearchForm from 'components/composites/SearchForm/SearchForm';
import ArrowListItem from 'components/composites/ArrowListItem/ArrowListItem';

export default class GlobalMenu extends Component {

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
    
    <Panel panelName={panelClassName}>
      <AppList {...this.props} />
      <ArrowListItem className="previous" route="/workspace/viewer">Currently opened dossiers</ArrowListItem>
      <ArrowListItem className="all" route="/workspace/viewer">Previously viewed</ArrowListItem>
      <br />
      <SearchForm width="full" textPlaceholder="Enter a dossier number to search"/>
      <hr />
      <h5><i style={iconStyle} className="icon-settings2" /> Settings</h5>
    </Panel>
      
    )
  }

}

GlobalMenu.propTypes = {}
GlobalMenu.defaultProps = {}