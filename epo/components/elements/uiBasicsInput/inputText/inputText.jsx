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
  InputClassName: React.PropTypes.string,
  InputName: React.PropTypes.string,
  InputMaxLength: React.PropTypes.number,
  InputValue: React.PropTypes.string,
  InputPlaceholder: React.PropTypes.string
};

// Default props
InputText.defaultProps = {
  InputClassName: 'default',
  InputName: 'default',
  InputMaxLength: '500',
  InputValue: '',
  InputPlaceholder: 'Enter text...'
};