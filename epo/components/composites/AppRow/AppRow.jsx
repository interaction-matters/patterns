  /***************
A basic label
****************/

import React, { Component, PropTypes } from 'react';

import styles from './AppRow.scss';

import { Link } from 'react-router';
 
import Badge from 'components/elements/Badge/Badge';
import Indicator from 'components/elements/Indicator/Indicator';

export default class AppRow extends Component {

  render() {

    const {
      shortName,
      route,
      name,
      number,
      activeNumber,
      totalNumber,
      info
    } = this.props

    let hidden;
    this.props.info == false ? hidden = '--hidden' : hidden = ''

    return (
    	<Link to={route} className='app-row'>
    		<Badge {...this.props}>{shortName}</Badge>
    		<span className='app-row__link'>{name}</span>
    		<span className={'app-row__numeric' + hidden.trim()}>

          { ( this.props.number ? <Indicator {...this.props}>{number}</Indicator> : <span className='app-row__spacer'></span> ) }
	      	
	      	<span className='app-row__treatment'>
	      		{ ( this.props.activeNumber ? <strong>{activeNumber}/</strong> : '' ) }           
            { ( this.props.totalNumber ? <span>{totalNumber}</span> : '' ) }
	      	</span>
	     	</span>
    	</Link>
    );
  }

};

AppRow.propTypes = {
  shortName: React.PropTypes.string.isRequired,
  route: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  number: React.PropTypes.number,
  activeNumber: React.PropTypes.number,
  totalNumber: React.PropTypes.number,
  info: React.PropTypes.bool
}

AppRow.defaultProps = {}