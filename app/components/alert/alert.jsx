import styles from './alert.scss';

import React, { Component } from 'react';

import UiBasics from '../uiBasics/uiBasics';

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

export default class AlertBox extends Component {

  render() {

  	const title = (
		  <h3>Ui Basics (Team Edyt)</h3>
		);

		const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);

    return (
    	<div>  		
			  <Panel className={styles.grid6of12} header={title} bsStyle='primary'>
		      <UiBasics />
		    </Panel>

			  <ButtonToolbar>
			    {/* Standard button */}
			    <Button>Default</Button>

			    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
			    <OverlayTrigger placement='bottom' overlay={tooltip}>
			    	<Button bsStyle='primary'>Primary</Button>
			    </OverlayTrigger>

			    {/* Indicates a successful or positive action */}
			    <Button bsStyle='success'>Success</Button>

			    {/* Contextual button for informational alert messages */}
			    <Button bsStyle='info'>Info</Button>

			    {/* Indicates caution should be taken with this action */}
			    <Button bsStyle='warning'>Warning</Button>

			    {/* Indicates a dangerous or potentially negative action */}
			    <Button bsStyle='danger'>Danger</Button>

			    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
			    <Button bsStyle='link'>Link</Button>

			    <OverlayTrigger trigger='click' placement='bottom' overlay={<Popover id='popID' title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
			      <Button bsStyle='default'>Click</Button>
			    </OverlayTrigger>

			  </ButtonToolbar>

			</div>
		);
  }
};