/*****************************
Select & Multi-select Dropdown
------------------------------
A simple semantic dropdown.

Html attributes:
- autofocus
- disabled
- form
- multiple
- name
- required
- size
******************************/

import React, { Component, PropTypes } from 'react';

import styles from './MultiSelect.scss';

export default class MultiSelect extends Component {

	render() {

  	// Get menu items in menu
  	var options = this.props.options.map((option, index) => {
      return <option key={index} value={option.value}>{option.text}</option>
    });
    // Multiple option

    return (
			<select className="ui-select">
				<option value={this.props.defaultValue}>{this.props.defaultValue}</option>
        {options}
      </select>
    );
  }

};

MultiSelect.propTypes = {
	options: React.PropTypes.array.isRequired,
	defaultValue: React.PropTypes.string,
	multiple:React.PropTypes.bool
}

MultiSelect.defaultProps = {
	defaultValue: 'Select'
}