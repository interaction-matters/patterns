import React, {Component} from 'react';

// Sass dependencies
import styles from './content.scss';

// React dependencies

import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="content">
        <UiBasicsWrapper containerName='content__main-panel'>
    			<Alert>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default DOSSIER CONTENT</strong> page.
    			</Alert>
    		</UiBasicsWrapper>

        <UiBasicsWrapper containerName='content__secondary-panel'>
    			<Alert>
    				<strong>Secondary Content</strong>
    			</Alert>
        </UiBasicsWrapper>
      </div>
    );
  }

};
