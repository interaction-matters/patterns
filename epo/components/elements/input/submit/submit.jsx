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

import styles from './submit.scss';

export default class Submit extends Component {

  render() {

    // Pass in input html attributes as props (more coming soon – see above)
    var colour = this.props.colour;
    var name = this.props.name;
    var value = this.props.value;

    return (
      <input type="submit" className={'ui-input-submit' + ' ' + 'ui-input-submit--' + colour} name={name} value={value} />
    );
  }

};

// Express our proptypes
Submit.propTypes = {
  colour: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
};
// Default props
Submit.defaultProps = {
  colour: 'primary',
  name: 'submit',
  value: 'Submit'
};