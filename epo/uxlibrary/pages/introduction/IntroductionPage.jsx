import React, {Component} from 'react';
var Highlight = require('react-highlight');

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';
import Alert from 'components/elements/Alert/Alert';

export default class IntroductionPage extends Component {

  render() {

    return (

      <div className='library__main-content'>
        <h2>Introduction</h2>
        <Label type="primary"><i className="icon-star" /> <b>v.0.0.2</b></Label>
        &nbsp;
        <Label type="success"><i className="icon-schedule" /> <b>18.12.15</b></Label>
        &nbsp;
        <Label type="default">Proposal</Label>
        <hr />
        <Panel panelName="panel">
          <h4>Overview</h4>
          <p>This is an ongoing documentation effort.</p>          
        </Panel>
        <Panel>
            <h4>Purpose of this Library</h4>
            <p>The main purpose of this library is to provide a readily viewable inventory of user interface components available for use inside of the UX team's React prototyping environment. The library also enables easier refinement and iteration
            of components, as well as a quick reference of a component's properties, purpose, usage and accessibility requirements.</p>
        </Panel>
        <Panel>
          <h4>Browser Support</h4>
          <p>Currently only fully tested on <code className="inline">Google Chrome <b>v4.0+</b></code>. Support for most modern browsers is implied. Please report any issues to <b>M Doble</b> or <b>K Spaeth.</b></p>
        </Panel>
      </div>

    );
  }

};