import React, { Component } from 'react';

import styles from './sampleComponent.scss';
import Main from '../main/main';
import UiBasics from '../uiBasics/uiBasics';
import UiBasicsLabel from '../uiBasicsLabel/uiBasicsLabel';
import { Alert } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import AlertBox from '../alert/alert';

class SampleComponent extends Component {

  constructor(...args){
    super(...args);
    this.state = {
      alertVisible: true
    }
  }

  render() {
    return (
      <Panel className={ styles.root }>
        <p className={ styles.text }>This class is locally scoped. Bosh!</p>
      	<Alert bsStyle='warning' onDismiss={this.handleAlertDismiss.bind(this)}>
			    <strong>Holy guacamole!</strong> Here is an alert straight into the Component.
			  </Alert>
			  <AlertBox className="newClass" gridValue="1/2" />
        <UiBasics />
        <p>Here is a ui basics <UiBasicsLabel labelType='tsBadge'>label</UiBasicsLabel></p>
        <p>You can see here that we are mixing a <b>Bootstrap</b> <Button bsStyle='primary' bsSize="small">Button</Button> with a label for <UiBasicsLabel labelType='statusRefused'>Refused</UiBasicsLabel>, and <UiBasicsLabel labelType='statusPending'>Pending</UiBasicsLabel> from UI basics (Team Edyt)</p>
      </Panel>
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