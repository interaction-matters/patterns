import React, { Component } from 'react';

import styles from './sampleComponent.scss';
import Main from 'components/main/main';
import UiBasics from 'components/uiBasics/uiBasics';
import UiBasicsLabel from 'components/uiBasicsLabel/uiBasicsLabel';
import { Alert } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

import AlertBox from 'components/alert/alert';

class SampleComponent extends Component {

  constructor(...args){
    super(...args);
    this.state = {
      alertVisible: true
    }
  }

  render() {
    return (
      <div>
        <Panel className='main-panel'>
        	<Alert bsStyle='success' onDismiss={this.handleAlertDismiss.bind(this)}>
  			    <strong>Congratulations!</strong> You have successfully loaded the <strong>default app</strong> page.
  			  </Alert>
  			  <AlertBox className="newClass" gridValue="1/2" />        
        </Panel>

        <Panel className='secondary-panel' header='Secondary content' bsStyle='primary'>
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

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

};

export default SampleComponent;