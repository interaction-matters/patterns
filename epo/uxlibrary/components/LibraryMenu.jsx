/***************
UX Library Menu
****************/

import React, { Component, PropTypes } from 'react';

/* Styles */
import styles from './LibraryMenu.scss';
/* Components */
import { Link } from 'react-router';
import Label from 'components/informational/Label/Label';
/* Utils */
import { toggleClass } from 'shared/functions/toggleClass.js';

export default class LibraryMenu extends Component {

  render() {

    return (
      <div className='library__nav'>
        <div className="library__title">
          <span>
            <i className="icon-epo-logo" />
            &nbsp;
            UX Library&nbsp; <span className="title__beta-label">Beta</span>
          </span>
        </div>
        <ul className="library__menu">
          <li className="library__item">
            <span>Getting Started</span>
            <ul>
              <li><Link to="/library/introduction">Introduction</Link></li>
              <li><Link to="/library/introduction" className="disabled">Tech stack overview</Link></li>
              <li><Link to="/library/introduction" className="disabled">Using the code</Link></li>
              <li><Link to="/library/introduction" className="disabled">References</Link></li>
            </ul>
          </li>
          <li className="library__item">
            <span>Foundation</span>
            <ul>
              <li><Link to="/library/introduction" className="disabled">Colours</Link></li>
              <li><Link to="/library/introduction" className="disabled">Icons</Link></li>
              <li><Link to="/library/introduction" className="disabled">Typography</Link></li>
              <li><Link to="/library/introduction" className="disabled">Utilities</Link></li>
            </ul>
          </li>
          <li className="library__item">
            <span>Layout</span>
            <ul>
              <li><Link to="/library/introduction" className="disabled">Panel</Link></li>
              <li><Link to="/library/introduction" className="disabled">Disclosure</Link></li>
              <li><Link to="/library/introduction" className="disabled">Dialog</Link></li>
              <li><Link to="/library/introduction" className="disabled">Overlay</Link></li>
              <li><Link to="/library/introduction" className="disabled">Modal</Link></li>
              <li><Link to="/library/introduction" className="disabled">Popover</Link></li>
              <li><Link to="/library/introduction" className="disabled">Accordian</Link></li>
            </ul>
          </li>
          <li className="library__item">
            <span>Navigation</span>
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
          <li className="library__item">
            <span>Actions</span>
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
          <li className="library__item">
            <span>Informational</span>
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
           <li className="library__item">
            <span>Form Controls</span>
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
           <li className="library__item">
            <span>Feedback</span>
            <ul>
              <li><Link to="/library/introduction" className="disabled">Feedback on button</Link></li>
              <li><Link to="/library/introduction" className="disabled">Notification</Link></li>
              <li><Link to="/library/introduction" className="disabled">Alert</Link></li>
              <li><Link to="/library/introduction" className="disabled">Progress indicators</Link></li>
              <li><Link to="/library/introduction" className="disabled">Step indicators</Link></li>
              <li><Link to="/library/introduction" className="disabled">Tooltip</Link></li>
            </ul>
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
            <ul>
              <li><Link to="/management/work-manager">Snippet list</Link></li>
              <li><Link to="/management/work-manager">Work Manager</Link></li>
              <li><Link to="/library/introduction" className="disabled">Global Menu</Link></li>
              <li><Link to="/library/introduction" className="disabled">Allocation Module</Link></li>
              <li><Link to="/library/introduction" className="disabled">Search/Query</Link></li>
            </ul>
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
        </ul>
      </div>
    );
  }

};

LibraryMenu.propTypes = {}

LibraryMenu.defaultProps = {}


