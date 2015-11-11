/***************
Component name
****************/

import React, { Component, PropTypes } from 'react';

import styles from './ArrowListItem.scss';

import { Link } from 'react-router';
 
export default class ArrowListItem extends Component {

	render() {

		let className = 'arrow-list-item';

			return (
				<div className={className  + ' ' + className + '--' + this.props.className}>
					<Link className={className + "__link"} to={this.props.route}>
						{this.props.children}
						<i className='icon icon-play_arrow'></i>
					</Link>				
				</div>
			);
	}

};

ArrowListItem.propTypes = {}

ArrowListItem.defaultProps = {}
