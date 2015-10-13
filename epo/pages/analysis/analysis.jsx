import React, {Component} from 'react';

// Sass dependencies
import styles from './analysis.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {



    return (
      <div className="analysis">
        <Panel panelName='analysis__main-panel'>
    			<Alert>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default ANALYSIS</strong> page.
    			</Alert>
    		</Panel>

        <Panel panelName='analysis__secondary-panel'>
    			<Alert>
    				<strong>Secondary Content</strong>
    			</Alert>
        </Panel>
      </div>
    );
  }

};
