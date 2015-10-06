/****************************
A basic input 'submit' button
-----------------------------
Attributes:

autofocus
defaultValue  
disabled  
form  
formAction  
formEnctype 
formMethod 
formNoValidate 
formTarget
name  
type 
value 

*****************************/

import React, { Component } from 'react';

import styles from './inputSubmit.scss';

export default class InputSubmit extends Component {

  render() {

    // Pass in input html attributes as props (more coming soon – see above)
    var ButtonColour = this.props.ButtonColour;
    var SubmitName = this.props.SubmitName;
    var SubmitValue = this.props.SubmitValue;
    var SubmitDefaultValue = this.props.SubmitDefaultValue;

    return (
      <input type="submit" className={'ui-basics-submit' + ' ' + 'ui-basics-submit--' + ButtonColour} name={SubmitName} value={SubmitValue} defaultValue={SubmitDefaultValue} />
    );
  }

};

// Express our proptypes
InputSubmit.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string
};