import React, {Component} from 'react';
import { connect } from 'react-redux';
 
// Sass dependencies
import styles from 'shared/styles/layout/_frames.scss';

// React dependencies
import Navigation from 'components/modules/navigation/navigation';
import Helpers from 'components/modules/helpers/helpers';
import RouteHandler from 'components/containers/RouteHandler'

{/* This is the layout for Workspace pages. */}
export default class Workspace extends Component {
	render() {
		return (
			<div className="view">
				{/* Main navigation */}
				<Navigation toolbarItems={this.props.toolbarItems} helperItems={this.props.utilItems} />
				{/* Routes */}
				<RouteHandler className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					{this.props.children}
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
    utilItems: state.utils
  };
}

export default connect(mapStateToProps)(Workspace);