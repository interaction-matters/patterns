import React, {Component} from 'react';
var Highlight = require('react-highlight');

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';
import Label from 'components/elements/label/label';
import Text from 'components/elements/input/text/text';

export default class InputPage extends Component {

  render() {

    return (

      <div className='library__main-content'>
        <h2>Text Input</h2>
        <Label type="primary">
          <i className="icon-cloud_download" />
          <a href="https://github.com/interaction-matters/patterns/tree/master/epo/components/elements/label">&nbsp;v.0.1</a>
        </Label>
        &nbsp;
        <Label type="default">Proposal</Label>
        <hr />
        
        <Panel panelName="panel">
          <h4>Usage</h4>
          <p>The <code className="inline">text input</code> component allows the user to input a simple text value. It is a simple html <code className="inline">input</code> element of the type <code className="inline">text</code>. A text box only allows for a single line of input.</p>          
        </Panel>
        <Panel panelName="panel">
            <h4>Input Types</h4>
            <p>There are five main input <i>types</i>:</p>
            <hr />         
            <h6>Basic Input</h6>
            <div>
              <Text />
            </div>
            <h6>Focus</h6>
            <div>
              <Text status="active" />
            </div>    
            <h6>Success</h6>
            <div>
              <Text status="success" />
            </div>
            <h6>Error</h6>
            <div>
              <Text status="error" />
            </div>
            <h6>Disabled</h6>
            <div>
              <Text status="disabled" />
            </div>
          <hr />
          <div>
            <strong>React/Jsx</strong>
            
            <Highlight className='html'>
              {"<Text />"}<br />
              {"<Text status='active' />"}<br />
              {"<Text status='success' />"}<br />
              {"<Text status='error' />"}<br />
              {"<Text status='disabled' />"}
            </Highlight>
            
          </div>
        </Panel>
        <div id="accessibility">
          <Panel>
              <h4>Accessibility</h4>
              <p>Avoid placeholder text for accessibility reasons. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.
                Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). 
                Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.</p>   
          </Panel>
        </div>
        <Panel>
          <h4>React Properties</h4>
          <p>The following <i>React prop types</i> are available to this component:</p>
          <p>
            <code className="inline">status</code>&nbsp;
          </p>
        </Panel>
        <Panel>
          <h4>Browser Support</h4>
          <p>[Table denoting browser support]</p>
        </Panel>
      </div>

    );
  }

};