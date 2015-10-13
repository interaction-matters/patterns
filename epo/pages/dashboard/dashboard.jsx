import React, {Component} from 'react';

// Sass dependencies
import styles from './dashboard.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';

export default class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">
        <Panel panelName='dashboard__main-panel'>
          &nbsp;
        </Panel>
      </div>
    );
  }

};
