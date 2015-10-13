import React, {Component} from 'react';

// Sass dependencies
import styles from './viewer.scss';

// React dependencies
import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="viewer">
        <UiBasicsWrapper containerName='viewer__main-panel'>
    			<Alert type='primary'>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default VIEWER</strong> page.
    			</Alert>
    		</UiBasicsWrapper>

        <UiBasicsWrapper containerName='viewer__secondary-panel'>
    			<Alert type='success'>
    				<strong>Secondary Content</strong>
    			</Alert>
        </UiBasicsWrapper>
      </div>
    );
  }

};
