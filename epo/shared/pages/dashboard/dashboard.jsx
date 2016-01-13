import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Sass dependencies
import styles from './dashboard.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Label from 'components/elements/label/label';
import AppList from 'components/composites/AppList/AppList';
import MenuList from 'components/composites/menuList/menuList';
import AppRow from 'components/composites/AppRow/AppRow'

export default class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">

        <Panel panelName='dashboard__main-panel'>

          <div className="dashboard__info">
            <Label type="primary"><i className="icon-star" /> <b>v.0.0.2</b></Label>
            &nbsp;
            <Label type="success"><i className="icon-schedule" /> <b>18.12.15</b></Label>
            &nbsp;
            <Label type="default">Proposal</Label>
          </div>

          <h2>Welcome to the Dashboard</h2>
          
          {/*<div className="main-menu">
          	<MenuList menuItems={this.props.menuItems} />
          </div>*/}
          
          <AppList {...this.props} info={false} />
          <hr />
          <AppRow
          	shortName="Lib"
          	route="/library"
          	name="View UI Library"
          	info={false}
          />
        </Panel>
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    menuItems: state.menuReducer,
    apps: state.globalNavAppsReducer
  }
}

export default connect(mapStateToProps)(Dashboard);