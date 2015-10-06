import React, {Component} from 'react';

// Sass dependencies
import styles from './office_actions.scss';

// React dependencies

import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsPanel from 'components/elements/uiBasicsPanel/uiBasicsPanel';

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

  	const title = (
		  <h3>Ui Basics (Team Edyt)</h3>
		);

		const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);

    return (
      <div>
        <UiBasicsPanel {...this.props} containerName='main-panel'>
        	<Alert bsStyle='success'>
  			    <strong>Congratulations!</strong> You have successfully loaded the <strong>default OFFICE ACTIONS</strong> page.
					</Alert>
  			  <div>  		
					  
				    <UiBasics />

					</div>      
        </UiBasicsPanel>

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
