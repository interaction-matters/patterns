import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Redux Actions
import * as toggleActions from 'actions/actions';
 
// Sass dependencies
import styles from 'shared/styles/layout/_frames.scss';

// React dependencies
import Navigation from 'components/modules/navigation/navigation';
import Helpers from 'components/modules/helpers/helpers';
import RouteHandler from 'components/elements/RouteHandler';

import GlobalMenu from 'components/modules/GlobalMenu/GlobalMenu';

// Import our initial state as a JSON object
const apps = require("config/applications.json");

{/* This is the layout for Workspace pages. */}
export default class Workspace extends Component {
	render() {

		// Props array to pass down to UI Basics
		// Now it passes props down 4 levels!
    let initProps = {
      // Search form props
      colour: 'warning', 
      name: 'search', 
      textPlaceholder: 'Gimme a search term', 
      value: 'Search now!',
      // Menu items props
      menuItems: this.props.menuItems
    }

    // Toggle global menu with menu button
    function changeMenuStatusHandler() {
      let changeMenuStatus;
      this.props.globalMenuStatus !== 'active' 
      ? changeMenuStatus = 'active'
      : changeMenuStatus = 'disabled'
      this.props.toggleActions.toggleGlobalMenu(changeMenuStatus);
      console.log('changeMenuStatus: ' + changeMenuStatus)
    }
    // Reset global menu (turn off)
    function resetMenuStatusHandler () {
      this.props.globalMenuStatus == 'active'
      ? this.props.toggleActions.toggleGlobalMenu('disabled')
      : '';
    }
    // Reset global menu when clicking outside of it
    document.body.onclick = function (event) {
      var target = event.target;  
      if ((target.className != 'menu-button__icon icon-global-nav') && (target.className == 'global-menu__overlay') && (this.props.globalMenuStatus == 'active')) {
        this.props.toggleActions.toggleGlobalMenu('disabled');
      }
    }.bind(this);
    // Reset global menu when clicking ESC key
    window.onkeydown = function (event) {
      if ((event.keyCode === 27) && (this.props.globalMenuStatus == 'active')) {
        this.props.toggleActions.toggleGlobalMenu('disabled');
      }
    }.bind(this);

		return (
			<div className="view">
				{/* Main navigation */}
				<Navigation 
          resetClick={resetMenuStatusHandler.bind(this)} 
          onAddClick={changeMenuStatusHandler.bind(this)} 
          toolbarItems={this.props.toolbarItems} 
          helperItems={this.props.utilItems} 
        />

        {(this.props.globalMenuStatus == 'active' ?
          <div>
            <GlobalMenu status={this.props.globalMenuStatus} apps={apps} />
            <div className="global-menu__overlay"></div>
          </div>
        : '' )}
				{/* Routes */}
				<RouteHandler className="wrapper">
					{/* This will be replaced with whichever routes (pages) we pass in */}
					{/* Necessary to pass props down to {this.props.children} */}
					{ React.cloneElement(this.props.children, {...initProps, ...this.props}) }
				</RouteHandler>
				{/* Helpers */}
				<Helpers />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { 
    toolbarItems: state.nav,
    utilItems: state.utils,
    menuItems: state.menu,
    secondaryContent: state.secondary.secondaryContent,
    globalMenuStatus: state.globalMenu.globalMenuStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    /* 
    ** bind our imported actions to store.dispatch()
    ** and give them a key of the same name 
    */
    toggleActions: bindActionCreators(toggleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

