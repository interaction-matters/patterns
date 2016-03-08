import React, {Component} from 'react';
var Highlight = require('react-highlight');

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';
import Alert from 'components/feedback/Alert/Alert';
import ComboBox from 'components/formcontrols/ComboBox/ComboBox';

export default class ComboBoxPage extends Component {

  render() {

    let comboBoxStyle = {
      width: 50 + '%',
      float: 'left',
      marginRight: 10
    }

    const listItems = [
      {name:"Bristol"}, 
      {name:"Munich"}, 
      {name:"The Hague"}, 
      {name:"Berlin"},
      {name:"Vienna"}
    ]

    return (

      <div className='library__main-content'>
        <h2>Combo Box</h2>
        <Label type="primary"><i className="icon-star" /> <b>v.0.0.2</b></Label>
        &nbsp;
        <Label type="default">Draft</Label>
        <hr />
        <Panel>
        <h4>Standard Combo Box</h4>
        <p>A combo box is a commonly used graphical user interface widget (or control). 
        Traditionally, it is a combination of a drop-down list or list box and a single-line editable textbox, 
        allowing the user to either type a value directly or select a value from the list.</p>
        <hr />
          <div style={comboBoxStyle}>
            <ComboBox listItems={listItems} triggerMessage="Select" placeholder="type to select" />
          </div>
          {/* <div style={comboBoxStyle}>
            <ComboBox placeholder="type to select" />
          </div> */}
        </Panel>
        
      </div>

    );
  }

};