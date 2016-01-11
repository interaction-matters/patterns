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

import styles from './text.scss';

export default class Text extends Component {

  render() {

    // Pass in input html attributes as props (more coming soon – see above)
    var className = this.props.className;
    var textName = this.props.textName;
    var textMaxLength = this.props.textMaxLength;
    var textValue = this.props.InputValue;
    var textPlaceholder = this.props.textPlaceholder;

    let status;
    this.props.status ? status = 'is-' + this.props.status : status = ''

    return (
      <input type="text" className={'ui-input-text' + ' ' + 'ui-input-text--' + className + ' ' + status} name={textName} maxLength={textMaxLength} value={textValue} placeholder={textPlaceholder} />
    );
  }

};

// Express our proptypes
Text.propTypes = {
  className: React.PropTypes.string,
  textName: React.PropTypes.string,
  textMaxLength: React.PropTypes.number,
  textValue: React.PropTypes.string,
  textPlaceholder: React.PropTypes.string,
  status: React.PropTypes.string
};

// Default props
Text.defaultProps = {
  className: 'default',
  textName: 'default',
  textMaxLength: 500,
  textValue: '',
  textPlaceholder: 'Enter text...'
};