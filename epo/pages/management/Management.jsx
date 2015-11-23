import React, {Component} from 'react';
import { connect } from 'react-redux';

// Sass dependencies
import styles from './Management.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';
import Button from 'components/elements/button/button'

export default class Management extends Component {

  render() {

    return (
      <div className="management">
        <Panel panelName='management__main-panel'>
    			<Alert type='primary'>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default Management</strong> page.
    			</Alert>
          <hr />
          <Button type="danger">Off</Button>
          <hr />
    		</Panel>

        <Panel panelName='management__secondary-panel'>
    			<Alert type='success'>
    				<strong>Secondary Content</strong>
    			</Alert>
        </Panel>
      </div>
    );
  }

};