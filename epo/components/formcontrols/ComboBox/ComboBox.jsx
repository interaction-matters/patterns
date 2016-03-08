/***************
Component name
****************/

import React, { Component, PropTypes } from 'react';

import DropDownPanel from 'components/utils/DropDownPanel/DropDownPanel'; 

import styles from './ComboBox.scss';

class FilterList extends Component {
	render() {

		let filterItems = this.props.filteredResults.map((listItem, index) => {
			return <li key={index}><a className="dropdown-filter__item">{listItem.name}</a></li>
		});

		return (
			<div className="dropdown-filter">
				<DropDownPanel>
					<ul className="dropdown-filter__list">
						{filterItems}
					</ul>
				</DropDownPanel>
			</div>
		);
	}
};

{/* return a list of tags, updated by state 
class TagList extends React.Component {
	render(){
		return (
			
		)
	}
}*/}

{/* A single tag */}
class Tag extends React.Component {
	render(){
		return (
			<span className="tag">
				<span className="tag__name">{this.props.children}</span>
				<span className="tag__close-btn">x</span>
			</span>
		)
	}
}

export default class ComboBox extends Component {

	constructor(props) {
     super(props);
     /* Set initial slide content to hidden */
     this.state = {
     	toggle: 'off',
     	inputFocus: '',
     	search:'Enter text...',
     	listItems: this.props.listItems
     };
  }

  render() {

  	{/* Toggle functions */}
  	function toggl() {
			this.state.toggle === 'off'
			? this.setState({toggle: 'on'})
			: this.setState({toggle: 'off'})
		}

		function togglOn() {
      this.setState({toggle: 'on'})
    }

    function togglOff() {
      this.setState({toggle: 'off', inputFocus: ''})
    }

    function addFocus() {
    	this.setState({inputFocus: 'has-focus'})
    }

    function updateSearch(e) {
    	this.setState({toggle: 'on'})
    	this.setState({search: e.target.value})
    }

  	let className = 'combo-box';

  	let filteredResults = this.state.listItems.filter(
  		(item) => {
  			return item.name.indexOf(this.state.search) !== -1;
  		}
  	);

    return (
    	<div className={className}>
    		{/* Filter group */}
    		<div className={className + "__filter-group"}>    			
	    		<span className={className + "__input-group" + " " + this.state.inputFocus}>
	    			{/* <TagList /> */}
	    			<Tag>Bristol</Tag><Tag>Munich</Tag>
	    			<input 
	    				onChange={updateSearch.bind(this)} 
	    				onFocus={addFocus.bind(this)} 
	    				onBlur={togglOff.bind(this)}
	    				placeholder={this.state.search} 
	    				className={className + "__input"} 
	    			/>
	    		</span>
	    		{/* Trigger */}	
	    		<button onClick={toggl.bind(this)} onBlur={togglOff.bind(this)} className={className + "__trigger"}>
	    			{(this.props.triggerMessage ?
	    				<span>{this.props.triggerMessage}&nbsp;</span>
	    				: null
	    			)}
	    			<span className={className + "__caret"} />
	    		</button>
	    	</div>
	    	{/* Dropdown filter list */}
	    	{(this.state.toggle === 'on' ? <FilterList filteredResults={filteredResults} /> : '')}    	
    	</div>
    );
  }

};

ComboBox.propTypes = {}

ComboBox.defaultProps = {}