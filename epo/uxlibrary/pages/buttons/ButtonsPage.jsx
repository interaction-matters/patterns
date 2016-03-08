import React, {Component} from 'react';
var Highlight = require('react-highlight');
var ReactTabs = require('react-tabs');
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';
import Alert from 'components/feedback/Alert/Alert';
import Button from 'components/actions/Button/Button';
import SplitButton from 'components/actions/SplitButton/SplitButton';
import DropDownButton from 'components/actions/DropDownButton/DropDownButton';
import ButtonToolBar from 'components/utils/ButtonToolBar/ButtonToolBar';
import ButtonGroup from 'components/utils/ButtonGroup/ButtonGroup';
import MenuList from 'components/utils/MenuList/MenuList';
import SlidePanel from 'components/utils/SlidePanel/SlidePanel';
import DropDownPanel from 'components/utils/DropDownPanel/DropDownPanel';
import Block from 'components/utils/Block/Block';

export default class ButtonsPage extends Component {

  render() {

    // For dropdown demos
    const menuItems = [
      {text:"Viewer", target: "/workspace/viewer", icon: "icon-search2"}, 
      {text:"Office Actions", target: "/workspace/office-actions", icon: "icon-file-stack"}, 
      {text:"Dashboard", target: "/workspace/dashboard", icon: "icon-local_library"}, 
      {text:"Analysis", target: "/workspace/analysis", icon: "icon-dossier-files"}
    ]
    
    return (

      <div className='library__main-content'>
        <h2>Buttons</h2>
        <Label type="primary">
          <i className="icon-cloud_download" />&nbsp;
          v.0.1
        </Label>
        &nbsp;
        <Label style="subtle">Draft</Label>
        <hr />
        <Panel panelName="panel">
          <h4>Usage</h4>
          <p>The <code className="inline">Button</code> component defines a clickable button. Inside a <code className="inline">Button</code> element you can put content, like text or images. This is the difference between this element and buttons created with the <code className="inline">input</code> element.</p>          
          <Alert dismissible={true}>
            <i className="icon-local_library" />&nbsp;
            <strong>Tip:</strong> Read the accessibility guidelines for buttons <a href="#accessibility">at the bottom of this page</a>
          </Alert>

          {/*<MenuList menuItems={menuItems}  />*/}
        

        </Panel>
        <Panel panelName="panel">
          <h4>Button Types</h4>
          There are several button "types"   
          <hr />
          <h6>Basic button</h6>           
          <ButtonGroup>
             <Button type='primary' disabled={true}>Primary</Button>
             <Button type='warning'>Warning</Button>
             <Button type='success'>Success</Button>
             <Button type='danger'>Danger</Button>
             <Button type='info'>Info</Button>
             <Button>Default</Button>
             <Button type='link'>Link</Button>
          </ButtonGroup>
          <br />
          <h6>Split Button</h6>
          <ButtonGroup>
            <SplitButton icon='icon-file-stack' title="split button" type="danger">
              <DropDownPanel>
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </SplitButton>
            <SplitButton title="split button" type="primary">
              <DropDownPanel>
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </SplitButton>
            <SplitButton title="split button" type="default">
              <DropDownPanel>
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </SplitButton>
          </ButtonGroup>
          <br />
          <h6>Dropdown Buttons</h6>
          <ButtonGroup>
            <DropDownButton icon='icon-file-stack' title="dropdown" type="default">
              <DropDownPanel >
                <MenuList menuItems={menuItems} />
                <hr className = "dropdown-panel__hr" />
                <MenuList menuItems = {[
                  {text:"More items", target: "/workspace/viewer"}, 
                  {text:"Menu Item", target: "/workspace/office-actions"}, 
                  {text:"Menu Item", target: "/workspace/dashboard"}, 
                  {text:"Menu Item", target: "/workspace/analysis"}
                ]} />
              </DropDownPanel>
            </DropDownButton>
            <DropDownButton title="dropdown" type="success">
              <DropDownPanel>
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </DropDownButton>
            <DropDownButton title="dropdown" type="info">
              <DropDownPanel >
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </DropDownButton>
            <DropDownButton title="dropdown" type="link">
              <DropDownPanel >
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </DropDownButton>
          </ButtonGroup>
          <hr />
          <SlidePanel message="code">
            <Tabs>
              <TabList>
                <Tab>React/Jsx</Tab>
                <Tab>HTML</Tab>
              </TabList>
              <TabPanel> 
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
              </TabPanel>
              <TabPanel>
                <Highlight className='html'>
                  {"<div class='ui-button-toolbar'>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--primary'>Primary</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--warning'>Warning</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--success'>Success</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--danger'>Danger</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--info'>Info</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button'>Default</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--link'>Link</Button>"}<br />
                  {"</div>"}
                </Highlight>
              </TabPanel>
            </Tabs>
          </SlidePanel>
        </Panel>
        <Panel panelName="panel">
          <h4>Button Sizes</h4>
          <p>There are 6 button sizes</p>
          <hr />  
          <ButtonGroup>
            <Button size='smallest'>Smallest button</Button>
            <Button size='small'>Small button</Button>
            <Button>Default button</Button>
            <Button size='large'>Large button</Button>
            <Button size='largest'>Largest button</Button>
          </ButtonGroup>
          <hr />
          <SlidePanel message="code">
            <Tabs>
              <TabList>
                <Tab>React/Jsx</Tab>
                <Tab>HTML</Tab>
              </TabList>
              <TabPanel> 
                <Highlight className='html'>
                  {"<ButtonToolBar>"}<br />
                     &nbsp;&nbsp;{"<Button size='smallest'>Smallest button</Button>"}<br />
                     &nbsp;&nbsp;{"<Button size='small'>Small button</Button>"}<br />
                     &nbsp;&nbsp;{"<Button>Default button</Button>"}<br />
                     &nbsp;&nbsp;{"<Button size='large'>Large button</Button>"}<br />
                     &nbsp;&nbsp;{"<Button size='largest'>Largest button</Button>"}<br />
                  {"</ButtonToolBar>"}
                </Highlight>
              </TabPanel>
              <TabPanel>
                <Highlight className='html'>
                  {"<div class='ui-button-toolbar'>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--smallest'>Smallest button</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--small'>Small button</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button'>Default button</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--large'>Large button</Button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--largest'>Largest button</Button>"}<br />
                  {"</div>"}
                </Highlight>
              </TabPanel>
            </Tabs>
          </SlidePanel>
        </Panel>
        <Panel panelName="panel">
          <h4>Icon Buttons</h4>
          <p>Buttons with icons in</p>
          <hr />
          <div id="icons">           
            <ButtonGroup>
              <Button type='primary' icon='icon-file-stack'>Icon left</Button>
              <Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>
              <Button type='success' icon='icon-search2' iconOnly ='true'></Button>
              <Button type='link' icon='icon-trash'>Delete this</Button>
            </ButtonGroup>
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
                  {"<ButtonToolBar>"}<br />
                     &nbsp;&nbsp;{"<Button type='primary' icon='icon-file-stack'>Icon left</Button>"}<br />
                     &nbsp;&nbsp;{"<Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>"}<br />
                     &nbsp;&nbsp;{"<Button type='success' icon='icon-search2' iconOnly ='true'></Button>"}<br />
                     &nbsp;&nbsp;{"<Button type='link' icon='icon-trash'>Delete this</Button>"}<br />
                  {"</ButtonToolBar>"}
                </Highlight>
              </TabPanel>
              <TabPanel>
                <Highlight className='html'>
                  {"<div class='ui-button-toolbar'>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--primary'><i class='ui-button__icon icon-file-stack ui-button__icon--left'></i>Icon left</button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--warning'><i class='ui-button__icon icon-dossier-files ui-button__icon--right'></i>Icon right</button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--success'><i class='ui-button__icon icon-search2  ui-button__icon--icon-only'></i></button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--link'><i class='ui-button__icon icon-trash'></i>Delete this</button>"}<br />
                  {"</div>"}
                </Highlight>
              </TabPanel>
            </Tabs>
          </SlidePanel>
        </Panel>
        <Panel>     
          <h4>Button Groups</h4>
          <p>Button groups, and button toolbars, are used for grouping a collection of buttons together.</p>
          <hr />
          <h6>Button Group</h6>
          <ButtonGroup>
            <DropDownButton icon='icon-settings' title="options" type="default">
              <DropDownPanel >
                <MenuList menuItems={menuItems} />
              </DropDownPanel>
            </DropDownButton>
            <Button>Cancel</Button>
            <Button type="primary">Submit</Button>
          </ButtonGroup>
          <hr />
          <h6>Button Toolbar</h6>
          <Block>
            <Block placement="left">
              <ButtonToolBar size="small">
                <Button>Button</Button>
                <Button icon='icon-file-stack'>Button</Button>
                <Button icon='icon-settings'></Button>
                <DropDownButton title="dropdown" type="primary">
                  <DropDownPanel >
                    <MenuList menuItems={menuItems} />
                  </DropDownPanel>
                </DropDownButton>
                <Button>Button</Button>
              </ButtonToolBar>
            </Block>&nbsp;&nbsp;
            <Block placement="left">
              <ButtonToolBar size="small">
                <Button icon='icon-file-stack' iconOnly={true}></Button>
                <Button icon='icon-dossier-files' iconOnly={true}></Button>
                <Button icon='icon-search2' iconOnly={true}></Button>
                <Button icon='icon-trash' iconOnly={true}></Button>
              </ButtonToolBar>
            </Block>
          </Block>  
          <hr />
          <SlidePanel message="code">
            <Tabs>
              <TabList>
                <Tab>React/Jsx</Tab>
                <Tab>HTML</Tab>
              </TabList>
              <TabPanel>
                <Highlight className='html'>
                  {"<ButtonToolBar>"}<br />
                     &nbsp;&nbsp;{"<Button type='primary' icon='icon-file-stack'>Icon left</Button>"}<br />
                     &nbsp;&nbsp;{"<Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>"}<br />
                     &nbsp;&nbsp;{"<Button type='success' icon='icon-search2' iconOnly ='true'></Button>"}<br />
                     &nbsp;&nbsp;{"<Button type='link' icon='icon-trash'>Delete this</Button>"}<br />
                  {"</ButtonToolBar>"}
                </Highlight>
              </TabPanel>
              <TabPanel>
                <Highlight className='html'>
                  {"<div class='ui-button-toolbar'>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--primary'><i class='ui-button__icon icon-file-stack ui-button__icon--left'></i>Icon left</button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--warning'><i class='ui-button__icon icon-dossier-files ui-button__icon--right'></i>Icon right</button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--success'><i class='ui-button__icon icon-search2  ui-button__icon--icon-only'></i></button>"}<br />
                     &nbsp;&nbsp;{"<button type='button' class='ui-button ui-button--link'><i class='ui-button__icon icon-trash'></i>Delete this</button>"}<br />
                  {"</div>"}
                </Highlight>
              </TabPanel>
            </Tabs>
          </SlidePanel>
        </Panel>
        <div id="accessibility">
          <Panel>
            <h4>Specification</h4>
            <p>[Table denoting specification]</p>
          </Panel>
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