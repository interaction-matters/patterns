// Third party
import React, {Component} from 'react';
import { Link } from 'react-router';

// Sass dependencies
import styles from './dashboard.scss';

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';

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
          <Link to="/library">View library</Link>
        </Panel>
      </div>
    );
  }

};