import React, {Component} from 'react';

// Sass dependencies
import styles from './page2.scss';

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

export default class Page2 extends Component {

  render() {

  	const title = (
		  <h3>Ui Basics (Team Edyt)</h3>
		);

		const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);

    return (
      <div>
        <Panel className='main-panel'>
        	<Alert bsStyle='success'>
  			    <strong>Congratulations!</strong> You have successfully loaded the <strong>default SCREEN 2</strong> page.
  			  </Alert>
  			  <div>  		
					  <Panel header={title} bsStyle='default'>
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
        </Panel>

        <Panel className='secondary-panel secondary-panel--long' header='Secondary content' bsStyle='primary'>
          <p>This is a secondary content <UiBasicsLabel labelType='UiBasicslabel tsBadge'>panel</UiBasicsLabel></p>
          <hr />
          <Accordion>
            <Panel header='Simple text' eventKey='1'>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
            </Panel>
            <Panel header='Component inside' eventKey='2'>
              Here is a component (UI Basics) inside the panel:<br /><br />
              <UiBasics />
            </Panel>
            <Panel header='More text' eventKey='3'>
              <p>Here is an out-of-context ui basics <UiBasicsLabel labelType='UiBasicslabel tsBadge'>label</UiBasicsLabel></p><hr />
              <p>You can see here that we are mixing an extra small <b>Bootstrap</b> <Button bsStyle='primary' bsSize="xsmall">Button</Button> with a label for <UiBasicsLabel labelType='UiBasicslabel statusRefused'>Refused</UiBasicsLabel>, and <UiBasicsLabel labelType='UiBasicslabel statusPending'>Pending</UiBasicsLabel> from UI basics (Team Edyt)</p>    
            </Panel>
          </Accordion>
        </Panel>
      </div>
    );
  }

};
