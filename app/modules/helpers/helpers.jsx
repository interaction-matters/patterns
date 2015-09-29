/*******************************
Helpers
--------------------------------
Right hand side helpers module,
defined in 'Basic'
********************************/

import React, { Component } from 'react';

import styles from './helpers.scss';

//React-bootstrap components
import { Alert } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

export default class Helpers extends Component {

  render() {

  	const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);

    return (
    	<div className='helpers helpers__toolbar--vertical'>
		    	
			  		<ButtonGroup vertical>
					  	<Button><i className="icon-icon-annotate"></i></Button>
			        <Button><i className="icon-outdent"></i></Button>
			        <Button><i className="icon-indent"></i></Button>
			        <Button><i className="icon-template-add"></i></Button>
			        <Button><i className="icon-find-in-page"></i></Button>
			        <Button><i className="icon-outdent"></i></Button>
			        <Button><i className="icon-indent"></i></Button>
			        <Button><i className="icon-template-add"></i></Button>
			      </ButtonGroup>

			      <Button className='helpers__toolbar__button--anchored' bsStyle='primary'><i className="icon-external-link"></i></Button>

	    </div>
    );
  }

};