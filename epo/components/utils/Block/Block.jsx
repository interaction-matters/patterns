/***************
Component name
****************/

import React, { Component, PropTypes } from 'react';

import styles from './Block.scss';

export default class Block extends Component {

  render() {

  	let className = 'ui-block';

  	this.props.placement ? className += ('--' + this.props.placement) : className = className

    return (
    	<div className={className}>
    		{this.props.children}
    	</div>
    );
  }

};

Block.propTypes = {}

Block.defaultProps = {}