import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

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

    let changeMenuStatus;
    this.props.globalMenuStatus !== 'active' 
      ? changeMenuStatus = 'active'
      : changeMenuStatus = 'disabled'

    function changeMenuStatusHandler() {
      this.props.toggleActions.toggleGlobalMenu(changeMenuStatus);
    }

		return (
			<div className="view">
				{/* Main navigation */}
				<Navigation onAddClick={changeMenuStatusHandler.bind(this)} toolbarItems={this.props.toolbarItems} helperItems={this.props.utilItems} />
        {(this.props.globalMenuStatus == 'active' ?
          <div>
            <GlobalMenu apps={apps} />
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

