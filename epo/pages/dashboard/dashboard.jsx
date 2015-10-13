import React, {Component} from 'react';

// Sass dependencies
import styles from './dashboard.scss';

// React dependencies

import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';

export default class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">
        <UiBasicsWrapper containerName='dashboard__main-panel'>
          &nbsp;
        </UiBasicsWrapper>
      </div>
    );
  }

};
