import React, {Component} from 'react';
var Highlight = require('react-highlight');
var Markdown = require('react-remarkable');
var ReactTabs = require('react-tabs');
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';
import Alert from 'components/feedback/Alert/Alert';
import TextInput from 'components/formcontrols/TextInput/TextInput';
import SlidePanel from 'components/utils/SlidePanel/SlidePanel';

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
            <h4>Input States</h4>
            <p>There are five main input <i>states</i>:</p>
            <hr />         
            <h6>Basic Input</h6>
            <div>
              <TextInput textPlaceholder="Start writing..." />
            </div>
            <h6>Focus</h6>
            <div>
              <TextInput status="active"/>
            </div>
            <h6>Disabled</h6>
            <div>
              <TextInput status="disabled" />
            </div>   
            <h6>Success</h6>
            <div>
              <TextInput status="success" />
            </div>
            <h6>Error</h6>
            <div>
              <TextInput status="error" message="Here is an error message" />
            </div>
            
          <hr />
          <SlidePanel message="code">
            <Tabs>
              <TabList>
                <Tab>React/Jsx</Tab>
                <Tab>HTML</Tab>
              </TabList>     
              <TabPanel>  
                <Highlight className='html'>
                  {"<TextInput />"}<br />
                  {"<TextInput status='active' />"}<br />
                  {"<TextInput status='disabled' />"}<br />
                  {"<TextInput status='success' />"}<br />
                  {"<TextInput status='error' message='Here is an error message' />"}      
                </Highlight>        
              </TabPanel>
              <TabPanel>  
                <Highlight className='html'>
                  {"<input type='text' class='ui-input-text' name='default' maxlength='500' placeholder='Start writing...' />"}<br />
                  {"<input type='text' class='ui-input-text is-active' name='default' maxlength='500' />"}<br />
                  {"<input type='text' class='ui-input-text is-disabled' name='default' maxlength='500' />"}<br />
                  {"<input type='text' class='ui-input-text is-success' name='default' maxlength='500' />"}<br />
                  {"<span class='text-input__msg'>"}<br />
                  &nbsp;&nbsp;{"<i class='icon-warning'></i>"}<br />
                  &nbsp;&nbsp;{"Here is an error message"}<br />
                  {"</span>"}<br />
                  {"<input type='text' class='ui-input-text is-error' name='default' maxlength='500' />"}
                </Highlight>        
              </TabPanel>
            </Tabs>
          </SlidePanel>
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