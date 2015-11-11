/***************
A basic label
****************/

import React, { Component, PropTypes } from 'react';

import styles from './AppRow.scss';

import Badge from 'components/elements/Badge/Badge';
import Indicator from 'components/elements/Indicator/Indicator';

export default class AppRow extends Component {

  render() {

  	let className = 'app-row';
    let shortName = this.props.shortName;
    let route = this.props.route;
    let name = this.props.name;
    let number = this.props.number;
    let activeNumber = this.props.activeNumber;
    let totalNumber = this.props.totalNumber;

    return (
    	<div className={className}>
    		<Badge {...this.props}>{shortName}</Badge>
    		<a className='app-row__link' href={route}>{name}</a>
    		<div className='app-row__numeric'>

          { ( this.props.number ? <Indicator {...this.props}>{number}</Indicator> : <span className='app-row__spacer'></span> ) }
	      	
	      	<span className='app-row__treatment'>
	      		{ ( this.props.activeNumber ? <strong>{activeNumber}/</strong> : '' ) }           
            { ( this.props.totalNumber ? <span>{totalNumber}</span> : '' ) }
	      	</span>
	     	</div>
    	</div>
    );
  }

};

AppRow.propTypes = {
  shortName: React.PropTypes.string.isRequired,
  route: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  number: React.PropTypes.number,
  activeNumber: React.PropTypes.number,
  totalNumber: React.PropTypes.number
}

AppRow.defaultProps = {}