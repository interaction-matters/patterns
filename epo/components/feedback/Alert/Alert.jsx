/***************
A basic alert
****************/

import React, { Component } from 'react';

import styles from './Alert.scss';

export default class Alert extends Component {

	constructor(props) {
     super(props);
     this.state = {visible: true};
  }

  render() {

  	// Dismiss the alert
  	function dismiss() {
			this.setState({visible: false});
		}
		// Assign class names
  	let className = 'ui-alert';
  	let classString = className + ' ' + className + '--' + this.props.type;

    return (
    	this.state.visible == true ?
    		<div className={classString}>
	    		{this.props.children}
	    		{(this.props.dismissible ?
	    			<span onClick={dismiss.bind(this)} className={className + "__close-btn"}>x</span>
	    			: null
	    		)}
	    	</div> : null
    );
  }

};

Alert.propTypes = {
  type: React.PropTypes.string,
  dismissible: React.PropTypes.bool
}

Alert.defaultProps = {
  type: 'primary',
  dismissible: 'false'
}