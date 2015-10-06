import React, {Component} from 'react';

// Sass dependencies
import styles from './analysis.scss';

// React dependencies

import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';

//React-bootstrap components
import { Alert } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

export default class Content extends Component {

  render() {



    return (
      <div>
        <Panel className='main-panel'>
			<Alert bsStyle='info'>
				<strong>Congratulations!</strong> You have successfully loaded the <strong>default ANALYSIS</strong> page.
			</Alert>
		</Panel>

        <Panel className='secondary-panel secondary-panel--long'>
			<Alert bsStyle='info'>
				<strong>Secondary Content</strong>
			</Alert>
        </Panel>
      </div>
    );
  }

};
