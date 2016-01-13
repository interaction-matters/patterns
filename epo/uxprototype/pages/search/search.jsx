import React, {Component} from 'react';

// Sass dependencies
import styles from './search.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="search">
        <Panel panelName='search__main-panel'>
    			<Alert>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>SEARCH</strong> page.
    			</Alert>
    		</Panel>

        <Panel panelName='search__secondary-panel'>
    			<Alert>
    				<strong>Secondary Content</strong>
    			</Alert>
        </Panel>
      </div>
    );
  }

};
