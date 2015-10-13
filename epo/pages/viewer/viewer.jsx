import React, {Component} from 'react';

// Sass dependencies
import styles from './viewer.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="viewer">
        <Panel panelName='viewer__main-panel'>
    			<Alert type='primary'>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default VIEWER</strong> page.
    			</Alert>
    		</Panel>

        <Panel panelName='viewer__secondary-panel'>
    			<Alert type='success'>
    				<strong>Secondary Content</strong>
    			</Alert>
        </Panel>
      </div>
    );
  }

};
