import React, {Component} from 'react';
var Highlight = require('react-highlight');

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';
import Label from 'components/elements/label/label';

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
                     
            <h6>Basic labels</h6>
            <div>
              <Label>Default</Label>&nbsp;
              <Label type="primary">Primary</Label>&nbsp;
              <Label type="success">Success</Label>&nbsp;
              <Label type="warning">Warning</Label>&nbsp;
              <Label type="danger">Danger</Label>
            </div>
            
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
            <Highlight className='html'>
              {"<ButtonToolBar>"}<br />
                 &nbsp;&nbsp;{"<Button type='primary'>Primary</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='warning'>Warning</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='success'>Success</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='danger'>Danger</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='info'>Info</Button>"}<br />
                 &nbsp;&nbsp;{"<Button>Default</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='link'>Link</Button>"}<br />
              {"</ButtonToolBar>"}
            </Highlight>
          </div>
        </Panel>
        <Panel panelName="panel">
          <h4>Label Sizes</h4>
          <p>There are 2 label sizes</p>
          <div>   
            <Label>Normal</Label>&nbsp;
            <Label size="large">Large</Label>
          </div>
          <hr />
          <div>
            <strong>React/Jsx</strong>
            <Highlight className='html'>
              {"<ButtonToolBar>"}<br />
                 &nbsp;&nbsp;{"<Button type='primary' icon='icon-file-stack'>Icon left</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='success' icon='icon-search2' iconOnly ='true'></Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='link' icon='icon-trash'>Delete this</Button>"}<br />
              {"</ButtonToolBar>"}
            </Highlight>
          </div>
        </Panel>
        <Panel panelName="panel">
          <h4>Badges</h4>
          <p>Label type of badge.</p>
          <div>   
            <Label role="badge">1</Label>&nbsp;
            <Label type="primary" role="badge">2</Label>&nbsp;
            <Label type="success" role="badge">3</Label>&nbsp;
            <Label type="warning" role="badge">4</Label>&nbsp;        
            <Label type="danger" role="badge">5</Label>&nbsp;   
            <Label type="danger" role="badge">12</Label>&nbsp;
            <Label type="danger" role="badge">123</Label>
          </div>
          <hr />
          <div>
            <strong>React/Jsx</strong>
            <Highlight className='html'>
              {"<ButtonToolBar>"}<br />
                 &nbsp;&nbsp;{"<Button type='primary' icon='icon-file-stack'>Icon left</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='success' icon='icon-search2' iconOnly ='true'></Button>"}<br />
                 &nbsp;&nbsp;{"<Button type='link' icon='icon-trash'>Delete this</Button>"}<br />
              {"</ButtonToolBar>"}
            </Highlight>
          </div>
        </Panel>
        <div id="accessibility">
          <Panel>
              <h4>Accessibility</h4>
              <p>Users frequently confuse labels as buttons. Always conduct usability testing to make sure your particular implementation is not causing frustration.
              If your labels are not interactive, be sure to disable hover, focus, and active styles.</p>
              <p>When labels are used to call out new content that is dynamically loaded onto a page, be sure to use ARIA live regions to alert screen readers of the change.</p>   
          </Panel>
        </div>
        <Panel>
          <h4>React Properties</h4>
          <p>The following <i>React prop types</i> are available to this component:</p>
          <p>
            <code className="inline">type</code>,&nbsp;
            <code className="inline">role</code>,&nbsp;
            <code className="inline">size</code>&nbsp;
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