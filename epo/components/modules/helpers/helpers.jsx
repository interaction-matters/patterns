/*******************************
Helpers
--------------------------------
Right hand side helpers module
********************************/

import React, { Component } from 'react';

import styles from './helpers.scss';

import Button from 'components/elements/button/button';

export default class Helpers extends Component {

  render() {

    return (
    	<div className='helpers helpers__toolbar--vertical'>
		    	
	  		<nav>
			  	<Button><i className="icon-icon-annotate"></i></Button>
	        <Button><i className="icon-outdent"></i></Button>
	        <Button><i className="icon-indent"></i></Button>
	        <Button><i className="icon-template-add"></i></Button>
	        <Button><i className="icon-find-in-page"></i></Button>
	        <Button><i className="icon-outdent"></i></Button>
	        <Button><i className="icon-indent"></i></Button>
	        <Button><i className="icon-template-add"></i></Button>
	      </nav>

	      <Button className='helpers__toolbar__button--anchored'><i className="icon-external-link"></i></Button>

	    </div>
    );
  }

};