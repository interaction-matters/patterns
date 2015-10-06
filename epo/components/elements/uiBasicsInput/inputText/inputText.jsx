/***********************
A basic input text field
------------------------
Attributes:

autocomplete
autofocus
defaultValue
disabled 
form
list
maxLength 
name
pattern 
placeholder 
readOnly
required
size
type
value
************************/

import React, { Component } from 'react';

import styles from './inputText.scss';

export default class InputText extends Component {

  render() {

    // Pass in input html attributes as props (more coming soon – see above)
    var InputClassName = this.props.InputClassName;
    var InputName = this.props.InputName;
    var InputMaxLength = this.props.InputMaxLength;
    var InputValue = this.props.InputValue;
    var InputPlaceholder = this.props.InputPlaceholder;

    return (
      <input type="text" className={'ui-basics-input-text' + ' ' + 'ui-basics-input-text--' + InputClassName} name={InputName} maxLength={InputMaxLength} value={InputValue} placeholder={InputPlaceholder} />
    );
  }

};

// Express our proptypes
InputText.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  maxLength: React.PropTypes.number,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string
};