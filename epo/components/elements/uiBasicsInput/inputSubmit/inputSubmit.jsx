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
  ButtonColour: React.PropTypes.string,
  SubmitName: React.PropTypes.string,
  SubmitValue: React.PropTypes.string,
  SubmitDefaultValue: React.PropTypes.string
};
// Default props
InputSubmit.defaultProps = {
  ButtonColour: 'primary',
  SubmitName: 'submit',
  SubmitValue: 'Submit',
  SubmitDefaultValue: ''
};