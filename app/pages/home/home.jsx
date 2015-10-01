/*******************************
Home
--------------------------------
Home page
********************************/

import React, {Component} from 'react';

// Sass dependencies
import styles from './home.scss';

// React dependencies
import UiBasicsLabel from 'components/uiBasicsLabel/uiBasicsLabel';
import UiBasics from 'modules/uiBasics/uiBasics';

import { Alert } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<div className="view">
				<Alert bsStyle='success'>
			    <strong>Congratulations!</strong> You have successfully loaded the <strong>default HOME</strong> page.
			  </Alert>
				<Panel className='main-panel'>       	
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

        <Panel className='secondary-panel secondary-panel--short' header='Secondary content' bsStyle='primary'>
          <p>This is a secondary content <UiBasicsLabel labelType='UiBasicslabel tsBadge'>panel</UiBasicsLabel></p>
          <UiBasics />
        </Panel>
        <Panel className='secondary-panel secondary-panel--short' header='Secondary content'>
          <p>This is a secondary content <UiBasicsLabel labelType='UiBasicslabel tsBadge'>panel</UiBasicsLabel></p>
          <UiBasics />
        </Panel>
			</div>
		);
	}
}
