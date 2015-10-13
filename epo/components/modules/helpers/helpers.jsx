/*******************************
Helpers
--------------------------------
Right hand side helpers module
********************************/

import React, { Component } from 'react';

import styles from './helpers.scss';

export default class Helpers extends Component {

  render() {

    return (
    	<div className='helpers helpers__toolbar--vertical'>
		    	
	  		<nav>
			  	<button><i className="icon-icon-annotate"></i></button>
	        <button><i className="icon-outdent"></i></button>
	        <button><i className="icon-indent"></i></button>
	        <button><i className="icon-template-add"></i></button>
	        <button><i className="icon-find-in-page"></i></button>
	        <button><i className="icon-outdent"></i></button>
	        <button><i className="icon-indent"></i></button>
	        <button><i className="icon-template-add"></i></button>
	      </nav>

	      <button className='helpers__toolbar__button--anchored'><i className="icon-external-link"></i></button>

	    </div>
    );
  }

};