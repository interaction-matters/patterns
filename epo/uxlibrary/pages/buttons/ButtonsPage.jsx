import React, {Component} from 'react';
var Highlight = require('react-highlight');

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';
import Alert from 'components/feedback/Alert/Alert';
import Button from 'components/actions/Button/Button';
import ButtonToolBar from 'components/utils/ButtonToolBar/ButtonToolBar';

export default class ButtonsPage extends Component {

  render() {

    return (

      <div className='library__main-content'>
        <h2>Buttons</h2>
        <Label type="primary">
          <i className="icon-cloud_download" />
          v.0.1
        </Label>
        &nbsp;
        <Label type="default">Proposal</Label>
        <hr />
        <Alert>
          <i className="icon-local_library" />&nbsp;
          <strong>Tip:</strong> Read the accessibility guidelines for buttons <a href="#accessibility">at the bottom of this page</a>
        </Alert>
        <br />
        <Panel panelName="panel">
          <h4>Usage</h4>
          <p>The <code className="inline">Button</code> component defines a clickable button. Inside a <code className="inline">Button</code> element you can put content, like text or images. This is the difference between this element and buttons created with the <code className="inline">input</code> element.</p>          
        </Panel>
        <Panel panelName="panel">
          <h4>Button Types</h4>
          <div>           
              <h6>Basic button configuration</h6>
              <ButtonToolBar>
                 <Button type='primary'>Primary</Button>
                 <Button type='warning'>Warning</Button>
                 <Button type='success'>Success</Button>
                 <Button type='danger'>Danger</Button>
                 <Button type='info'>Info</Button>
                 <Button>Default</Button>
                 <Button type='link'>Link</Button>
              </ButtonToolBar>
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
          <h4>Button Sizes</h4>
          <p>There are 6 button sizes</p>
          <ButtonToolBar>
            <Button size='smallest'>Smallest button</Button>
            <Button size='small'>Small button</Button>
            <Button>Default button</Button>
            <Button size='large'>Large button</Button>
            <Button size='largest'>Largest button</Button>
          </ButtonToolBar>
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
          <h4>Icon Buttons</h4>
          <p>Buttons with icons in</p>
          <div id="icons">           
            <ButtonToolBar>
              <Button type='primary' icon='icon-file-stack'>Icon left</Button>
              <Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>
              <Button type='success' icon='icon-search2' iconOnly ='true'></Button>
              <Button type='link' icon='icon-trash'>Delete this</Button>
            </ButtonToolBar>
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
              <p>Buttons are interactive controls, and therefore must be focusable. If the button role is added to an element that is not focusable by itself (such as 
              <code className="inline">span</code>, <code className="inline">div</code> or <code className="inline">p</code>)
              the tabindex attribute will have to be used to make the button focusable.</p>
              
              <p>Buttons need to be operable by mouse users as well as keyboard users. For native HTML <code className="inline">button</code> elements, 
              the button's onclick event will fire both for mouse clicks and when the space key is pressed while the button has focus. 
              But if another tag is used instead to create a custom button, the onclick event will only fire when clicked by the mouse cursor, 
              even if <code className="inline">role="button"</code> is used. Because of this, the developer will have to explicitly add a separate key event handler to the element so that the button 
              can be triggered when the space key is pressed.</p>   
          </Panel>
        </div>
        <Panel>
          <h4>React Proptypes</h4>
          <p>The following prop types are available to this component:</p>
          <p>
            <code className="inline">type</code>,&nbsp;
            <code className="inline">role</code>,&nbsp;
            <code className="inline">width</code>,&nbsp;
            <code className="inline">size</code>,&nbsp;
            <code className="inline">position</code>,&nbsp;
            <code className="inline">iconOnly</code>,&nbsp;
            <code className="inline">icon</code>
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