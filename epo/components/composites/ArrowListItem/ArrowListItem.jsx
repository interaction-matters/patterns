/***************
Component name
****************/

import React, { Component, PropTypes } from 'react';

import styles from './ArrowListItem.scss';

import DossierList from 'components/composites/DossierList/DossierList';
 
export default class ArrowListItem extends Component {

	render() {

		let className = 'arrow-list-item';

			return (
				<li className={className  + ' ' + className + '--' + this.props.className}>
					{(this.props.dossierStatus == "active" ?
            <ul className="global-menu__secondary">
              <DossierList dossiers={this.props.dossiers} />
            </ul>
          : ''
          )}
					<a className={className + "__link"} onClick={this.props.onAddClick}>
						{this.props.children}
						<i className='icon icon-play_arrow'></i>
					</a>				
				</li>
			);
	}

};

ArrowListItem.propTypes = {}

ArrowListItem.defaultProps = {}
