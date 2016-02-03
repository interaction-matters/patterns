// Third party
import React, {Component} from 'react';
import { Link } from 'react-router';

// Sass dependencies
import styles from './dashboard.scss';

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';

export default class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">

        <header className="dashboard__header">
          <div className="dashboard__inner">
            <h1><i className="icon-epo-logo" />&nbsp;<span className="light-red">EPO</span> UX Library</h1>
            <h6>A <b>UX</b> pattern and documentation library, based on <b>React</b>.</h6>
            <div className="dashboard__buttons">
              <Link to="/library"><button><i className="icon-library_books" />&nbsp;View library</button></Link>&nbsp;&nbsp;
              <a href="https://github.com/interaction-matters/patterns"><button><i className="icon-cloud_done" />&nbsp;View on Github</button></a>
            </div>
            <p className="dashboard__stats"><b><i className="icon-schedule" /></b>&nbsp;v.0.1 | <em>Last version release:</em> 18.12.15</p>
          </div>
        </header>
        <div className="dashboard__main-content">
          <Panel panelType="raised" panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Getting Started</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction">Introduction</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Tech stack overview</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Using the code</Link></li>
                  <li><Link to="/library/introduction" className="disabled">References</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Foundation</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction" className="disabled">Colours</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Icons</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Typography</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Utilities</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Layout</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction" className="disabled">Panel</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Dialog</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Overlay</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Modal</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Popover</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Navigation</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction" className="disabled">Global navigation</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Main navigation</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Top navigation</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Link</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Pagination</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Breadcrumbs</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Scroll bar</Link></li>
                  <li><Link to="/library/introduction" className="disabled">VIN bar</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Tabs</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Trays</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Carousel</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Actions</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/buttons">Button</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Split button</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Drag & drop</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Menus</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Menu Bar</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Toolbars</Link></li>
                  <li><Link to="/library/introduction" className="disabled">On-object menu</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Highlighting</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Text marker</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Cursor selection</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Magnifying glass</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Close mechanism</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Informational</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction" className="disabled">Headings</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Text display</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Figure display</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Thumbnail</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Metadata display</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Video player</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Visualisation elements</Link></li>
                  <li><Link to="/library/labels">Labels & badges</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Tags</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Lists</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Filters</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Facets</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Tables</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Tree structure display</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Snippet</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Form Controls</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/text-input">Text input</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Input field label</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Text editor</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Dropdown</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Headings</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Combo box</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Calendar picker</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Colour picker</Link></li>
                  <li><Link to="/library/introduction" className="disabled">In place editing</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Checkbox</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Radio buttons</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Toggle button (switch)</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Slider</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Multi select</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Autocomplete</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Captcha</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Numeric stepper</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Feedback</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction" className="disabled">Feedback on button</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Notification</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Alert</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Progress indicators</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Step indicators</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Tooltip</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>Demo Modules</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/library/introduction" className="disabled">Filter sections</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Form group</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Search box</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
          <Panel panelName="dashboard__menu-panel">   
            <ul className="dashboard__menu">
              <h4>EPO Conceptual Modules</h4>
              <li className="library__item">  
                <ul>
                  <li><Link to="/management/work-manager">Snippet list</Link></li>
                  <li><Link to="/management/work-manager">Work Manager</Link></li>
                  <li><Link to="/library/introduction" className="disabled">Global Menu</Link></li>
                </ul>
              </li>
            </ul>
          </Panel>
        </div>

          {/*<li className="library__item">
            <span>Foundation</span>
            
          </li>
          <li className="library__item">
            <span>Layout</span>
            
          </li>
          <li className="library__item">
            <span>Navigation</span>
            
          </li>
          <li className="library__item">
            <span>Actions</span>
            
          </li>
          <li className="library__item">
            <span>Informational</span>
            
          </li>
           <li className="library__item">
            <span>Form Controls</span>
            
          </li>
           <li className="library__item">
            <span>Feedback</span>
           
          </li>
           <li className="library__item">
            <span>Demo Modules</span>
            <ul>
              <li><Link to="/library/introduction" className="disabled">Filter sections</Link></li>
              <li><Link to="/library/introduction" className="disabled">Form group</Link></li>
              <li><Link to="/library/introduction" className="disabled">Search box</Link></li>
            </ul>
          </li>
           <li className="library__item">
            <span>EPO Conceptual Modules</span>
            
          </li>
          <li className="library__item">
            <span>Other (internal)</span>
            <ul>
              <li><Link to="/library/introduction" className="disabled">Switch</Link></li>
              <li><Link to="/library/introduction" className="disabled">Numeric stepper</Link></li>
              <li><Link to="/library/introduction" className="disabled">Link bar</Link></li>
              <li><Link to="/library/introduction" className="disabled">Panel headers</Link></li>
            </ul>
          </li>
        </ul>*/}
      </div>
    );
  }

};