import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Redux actions
import * as toggleActions from 'actions/actions';

// Global menu functions
import * as gmFuncs from 'shared/functions/globalmenu.js';
 
// Sass dependencies
import styles from 'shared/styles/layout/_frames.scss';

// React dependencies
import RouteHandler from 'components/elements/RouteHandler';
import Navigation from 'components/modules/navigation/navigation';
import Helpers from 'components/modules/helpers/helpers';
import GlobalMenu from 'components/modules/GlobalMenu/GlobalMenu';

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

		return (
			<div className="view">
				{/* Main navigation */}
				<Navigation 
          resetClick={gmFuncs.resetMenuStatusHandler.bind(this)} 
          onAddClick={gmFuncs.changeMenuStatusHandler.bind(this)} 
          toolbarItems={this.props.toolbarItems} 
          helperItems={this.props.utilItems}
        />
        {/* Conditional loading of global menu */}
        {(this.props.globalMenuStatus == 'active' ?
          <div>
            <GlobalMenu
              toggleActions = {this.props.toggleActions}
              status={this.props.globalMenuStatus}
              apps={this.props.apps}
              dossiers={this.props.dossiers}
              currentDossierStatus={this.props.currentDossierStatus}
              dossierClick={gmFuncs.dossierClickHandler.bind(this)}
            />  
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
    globalMenuStatus: state.globalMenu.globalMenuStatus,
    apps: state.globalNavApps,
    dossiers: state.dossiers,
    currentDossierStatus: state.currentDossiers.currentDossierList
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

