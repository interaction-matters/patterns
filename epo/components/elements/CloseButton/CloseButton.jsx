/***************
Component name
****************/

import React, { Component, PropTypes } from 'react';

import styles from './CloseButton.scss';

export default class CloseButton extends Component {

  render() {

  	let type;
  	this.props.type ? type = 'close-btn--' + this.props.type : type = '';

  	let className = 'close-btn' + ' ' + type;

    return (
    	<button className={className.trim()} onClick={this.props.onAddClick}>
    		<i className="icon-close" />
    	</button>
    );
  }

};

CloseButton.propTypes = {}

CloseButton.defaultProps = {}