import React, {Component} from 'react';
var Highlight = require('react-highlight');

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';
import Alert from 'components/elements/Alert/Alert';

export default class LabelsPage extends Component {

  render() {

    return (

      <div className='library__main-content'>
        <h2>Labels</h2>
        <Label type="primary">
          <i className="icon-cloud_download" />
          <a href="https://github.com/interaction-matters/patterns/tree/master/epo/components/elements/label">&nbsp;v.0.1</a>
        </Label>
        &nbsp;
        <Label type="default">Proposal</Label>
        <hr />
        <Alert>
          <i className="icon-local_library" />&nbsp;
          <strong>Tip:</strong> Read the accessibility guidelines for <i>labels</i> <a href="#accessibility">at the bottom of this page</a>
        </Alert>
        <br />
        <Panel panelName="panel">
          <h4>Usage</h4>
          <p>The <code className="inline">Label</code> component is used to draw attention to new, important content on a page that might otherwise be missed. Labels are not interactive.</p>          
        </Panel>
        <Panel panelName="panel">
            <h4>Label Types</h4>
            <p>There are two main label <i>types</i>:</p>
            <hr />         
            <h6>Basic labels</h6>
            <div>
              <Label>Default</Label>&nbsp;
              <Label type="primary">Primary</Label>&nbsp;
              <Label type="success">Success</Label>&nbsp;
              <Label type="warning">Warning</Label>&nbsp;
              <Label type="danger">Danger</Label>
            </div>
            <br />
            <h6>Subtle labels</h6>
            <div>
              <Label style="subtle">Default</Label>&nbsp;
              <Label type="primary" style="subtle">Primary</Label>&nbsp;
              <Label type="success" style="subtle">Success</Label>&nbsp;
              <Label type="warning" style="subtle">Warning</Label>&nbsp;
              <Label type="danger" style="subtle">Danger</Label>
            </div>
          <hr />
          <div>
            <strong>React/Jsx</strong>
            <h6>Basic</h6>
            <Highlight className='html'>
              {"<Label>Default</Label>"}<br />
              {"<Label type='primary'>Primary</Label>"}<br />
              {"<Label type='success'>Success</Label>"}<br />
              {"<Label type='warning'>Warning</Label>"}<br />
              {"<Label type='danger'>Danger</Label>"}
            </Highlight>
            <h6>Subtle</h6>
            <Highlight className='html'>
              {"<Label style='subtle'>Default</Label>"}<br />
              {"<Label type='primary' style='subtle'>Primary</Label>"}<br />
              {"<Label type='success' style='subtle'>Success</Label>"}<br />
              {"<Label type='warning' style='subtle'>Warning</Label>"}<br />
              {"<Label type='danger' style='subtle'>Danger</Label>"}
            </Highlight>
          </div>
        </Panel>
        <Panel panelName="panel">
          <h4>Label Sizes</h4>
          <p>There are 2 label sizes</p>
          <hr />
          <div>   
            <Label>Normal</Label>&nbsp;
            <Label size="large">Large</Label>
          </div>
          <hr />
          <div>
            <strong>React/Jsx</strong>
            <Highlight className='html'>
              {"<Label>Normal</Label>"}<br />
              {"<Label size='large'>Large</Label>"}
            </Highlight>
          </div>
        </Panel>
        <Panel panelName="panel">
          <h4>Badges</h4>
          <p>Badges are used to display numbers as numeric indicators. For example, to display the number of new notifications to a user. </p>
          <hr />
          <div>
            <h6>Basic</h6>  
            <Label role="badge">1</Label>&nbsp;
            <Label type="primary" role="badge">2</Label>&nbsp;
            <Label type="success" role="badge">3</Label>&nbsp;
            <Label type="warning" role="badge">4</Label>&nbsp;        
            <Label type="danger" role="badge">5</Label>&nbsp;   
            <Label role="badge">12</Label>&nbsp;
            <Label type="danger" role="badge">1,234</Label>
          </div>
          <br />
          <div>
            <h6>Subtle</h6>
            <Label role="badge" style="subtle">1</Label>&nbsp;
            <Label type="primary" role="badge" style="subtle">2</Label>&nbsp;
            <Label type="success" role="badge" style="subtle">3</Label>&nbsp;
            <Label type="warning" role="badge" style="subtle">4</Label>&nbsp;        
            <Label type="danger" role="badge" style="subtle">5</Label>&nbsp;   
            <Label role="badge" style="subtle">12</Label>&nbsp;
            <Label type="danger" role="badge" style="subtle">1,234</Label>
          </div>
          <hr />
          <div>
            <strong>React/Jsx</strong>
            <h6>Basic</h6>  
            <Highlight className='html'>      
              {"<Label role='badge'>1</Label>"}
              {"<Label type='primary' role='badge'>2</Label>"}<br />
              {"<Label type='success' role='badge'>3</Label>"}<br />
              {"<Label type='warning' role='badge'>4</Label>"}<br />       
              {"<Label type='danger' role='badge'>5</Label>"}<br /> 
              {"<Label role='badge'>12</Label>"}<br />
              {"<Label type='danger' role='badge'>1,234</Label>"}
            </Highlight>
            <h6>Subtle</h6>
            <Highlight className='html'>              
              {"<Label role='badge' style='subtle'>1</Label>"}<br />
              {"<Label type='primary' role='badge' style='subtle'>2</Label>"}<br />
              {"<Label type='success' role='badge' style='subtle'>3</Label>"}<br />
              {"<Label type='warning' role='badge' style='subtle'>4</Label>"}<br />     
              {"<Label type='danger' role='badge' style='subtle'>5</Label>"}<br />   
              {"<Label role='badge' style='subtle'>12</Label>"}<br />
              {"<Label type='danger' role='badge' style='subtle'>1,234</Label>"}
            </Highlight>     
          </div>
        </Panel>
        <div id="accessibility">
          <Panel>
              <h4>Accessibility</h4>
              <p>Users frequently confuse <code className="inline">labels</code> as <code className="inline">buttons</code>. Always conduct usability testing to make sure your particular implementation is not causing frustration.
              If your labels are not interactive, be sure to disable <code className="inline">hover</code>, <code className="inline">focus</code>, and <code className="inline">active</code> styles.</p>
              <p>When labels are used to call out new content that is dynamically loaded onto a page, be sure to use <code className="inline">ARIA live regions</code> to alert screen readers of the change.</p>   
          </Panel>
        </div>
        <Panel>
          <h4>Developer Notes</h4>
          <p>Resources for developers using this component</p>
          <hr />
          <h5>React Proptypes</h5>
          <p>The following <i>React prop types</i> are available to this component:</p>
          <p>
            <code className="inline">type</code>,&nbsp;
            <code className="inline">role</code>,&nbsp;
            <code className="inline">size</code>&nbsp;
          </p>
          <hr />
          <h5>Browser Support</h5>
          <p>[Table denoting browser support]</p>
        </Panel>
      </div>

    );
  }

};