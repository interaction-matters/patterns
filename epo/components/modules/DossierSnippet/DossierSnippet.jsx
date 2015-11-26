/**********************
Dossier Preview Snippet
***********************/

import React, { Component, PropTypes } from 'react';

import styles from './DossierSnippet.scss';

import StickerList from 'components/composites/StickerList/StickerList';

export default class DossierSnippet extends Component {

  render() {

  	let className = 'dossier-snippet';

  	let selected;
  	this.props.selected == true ? selected = '--selected' : selected = ''

  	let checked;
  	this.props.selected == true ? checked = "true" : checked = ''

  	let stickerType;
  	this.props.numberType ? stickerType = "dossier-snippet__number--" + this.props.numberType : stickerType = ''

  	function onAddClick() {
  		console.log('snippet is ' + selected);
  	}

    return (
    	<div onClick={onAddClick.bind(this)} className={className + ' ' + className + selected}>
    		<div className="dossier-snippet__tags">
    			<input type="checkbox" className="dossier-snippet__checkbox" defaultChecked={checked}/>
    			<b className="dossier-snippet__lang">{this.props.language}</b><br />
    			{(this.props.taStamp == true ?
    				<span className="dossier-snippet__ta-stamp">TA</span>
    				: ''
    			)} 			
    		</div>
    		<div className="dossier-snippet__numbers">
    			<span className={"dossier-snippet__number" + ' ' + stickerType.trim().toLowerCase()}>{this.props.number}</span>
    			<span className="dossier-snippet__sub-number">{this.props.subNumber}</span>
    			
    			{( this.props.stickers ?
    				<StickerList stickers={this.props.stickers} />
    				: ''
    			)}

    		</div>
    		<div className="dossier-snippet__info">
    			<a href="#" className="dossier-snippet__title">{this.props.title}</a><br />
    			<span className="dossier-snippet__applicant">{this.props.applicant}</span><br />
    			<span className="dossier-snippet__status"><b>Status:</b> {this.props.status}</span>
    		</div>
    		<div className="dossier-snippet__dates">
    			<ul className="ui-list">
	          <li title="Internal time limit"><i className="icon-epo-logo"></i> <time>{this.props.internalLimit}</time></li>
	          <li title="Committed time limit"><i className="icon-clock"></i> <time>{this.props.committedLimit}</time></li>
	          <li title="Legal limit"><i className="icon-gavel"></i> <time>{this.props.legalLimit}</time></li>
	        </ul>
    		</div>
    	</div>
    );
  }

};

DossierSnippet.propTypes = {
	selected: React.PropTypes.bool,
	language: React.PropTypes.string,
	taStamp: React.PropTypes.bool,
	number: React.PropTypes.string,
	subNumber: React.PropTypes.string,
	numberType: React.PropTypes.string,
	stickers: React.PropTypes.array,
	title: React.PropTypes.string,
	applicant: React.PropTypes.string,
	status: React.PropTypes.string,
	// Time limits
	internalLimit: React.PropTypes.string,
	committedLimit: React.PropTypes.string,
	legalLimit: React.PropTypes.string
}

DossierSnippet.defaultProps = {	
	selected: false,
	language: 'EN',
	taStamp: false,
	number: 'EP 1234 567 89',
	subNumber: 'A0123/45678B',
	title: 'An Amazing React Prototype',
	applicant: 'Applicant GMBH',
	status: 'Allocation of search division',
	internalLimit: '18.10.2013',
	committedLimit: '18.10.2013',
	legalLimit: '18.10.2013'
}