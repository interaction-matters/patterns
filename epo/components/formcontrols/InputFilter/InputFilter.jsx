/********************
Input Filter
---------------------
A controlled Input
field with a filtered
dropdown component
*********************/

import React, { Component, PropTypes } from 'react';
import TextInput from 'components/formcontrols/TextInput/TextInput';

import styles from './InputFilter.scss';

class FilterList extends Component {
	render(){
		return (
			<li>An item</li>
		);
	}
};

export default class InputFilter extends Component {

  render() {

  	let className = 'input-filter';

    return (
    	<div className={className}>
    		<TextInput />
    		<ul className="dropdown-filter">
    			<FilterList />
    		</ul>
    	</div>
    );
  }

};

InputFilter.propTypes = {
	filterItems: React.PropTypes.array
}

InputFilter.defaultProps = {}