/**********
Dossier Row
***********/

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './DossierRow.scss';

import CloseButton from 'components/elements/CloseButton/CloseButton';

export default class DossierRow extends Component {

  render() {

  	let className = 'dossier-row';

    let colour;
    this.props.colour ? colour = '--' + this.props.colour : colour = '';

    return (
    	<li className={className}>
    		<span className={className + '__colour-block' + colour}></span>
    		<span className={className + '__application'}>
    			<Link className={className + '__title'} to={this.props.title}>{this.props.title}</Link>
    			<p className={className + '__applicant'}>{this.props.applicant}</p>
    			<p className={className + '__number'}>{this.props.number}</p>
    		</span>
    		<span className={className + '__meta'}>
    			<p className={className + '__specialist'}>{this.props.specialist}</p>
    			<p className={className + '__lim-date'}><em>Lim.Date</em> {this.props.date}</p>
    		</span>
    		<CloseButton className={className + '__close'} type="icon-only" />
    	</li>
    );
  }

};

DossierRow.propTypes = {
	title: React.PropTypes.string,
    colour: React.PropTypes.string,
	applicant: React.PropTypes.string,
	number: React.PropTypes.string,
	specialist: React.PropTypes.string,
	date: React.PropTypes.string
}

DossierRow.defaultProps = {}