import React, {Component} from 'react';

// Sass dependencies
import styles from './search.scss';

// React dependencies

import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="search">
        <UiBasicsWrapper containerName='search__main-panel'>
    			<Alert>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default SEARCH</strong> page.
    			</Alert>
    		</UiBasicsWrapper>

        <UiBasicsWrapper containerName='search__secondary-panel'>
    			<Alert>
    				<strong>Secondary Content</strong>
    			</Alert>
        </UiBasicsWrapper>
      </div>
    );
  }

};
