import React, {Component} from 'react';

// Sass dependencies
import styles from './content.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="content">
        <Panel panelName='content__main-panel'>
    			<Alert>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default DOSSIER CONTENT</strong> page.
    			</Alert>
    		</Panel>

        <Panel panelName='content__secondary-panel'>
    			<Alert>
    				<strong>Secondary Content</strong>
    			</Alert>
        </Panel>
      </div>
    );
  }

};
