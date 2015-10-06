import React, {Component} from 'react';

// Sass dependencies
import styles from './dashboard.scss';

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

export default class Dashboard extends Component {

  render() {

  	const title = (
		  <h3>Ui Basics (Team Edyt)</h3>
		);

		const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);

    return (
      <div>
        <Panel className='panel-main' header="I am a DASHBOARD" bsStyle="success">
		</Panel>
      </div>
    );
  }

};
