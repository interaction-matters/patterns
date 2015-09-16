import styles from './main.scss';

import React from 'react';

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

//Declare style variables
var text = styles.text;
var grid = styles.grid;
var toolbar = styles.toolBar;
var right = styles.right;

class Main extends React.Component {

  render() {

  	const tooltip = (
		  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
		);

    return (
    	<Panel>
	    	<div className={ grid }>
		    	<div className={ toolbar }>
		    		<ButtonToolbar>
					    {/* Standard button */}
					    <Button>D</Button>

					    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
					    <OverlayTrigger placement='bottom' overlay={tooltip}>
					    	<Button bsStyle='primary'>P</Button>
					    </OverlayTrigger>

					    {/* Indicates a successful or positive action */}
					    <Button bsStyle='success'>S</Button>

					    {/* Contextual button for informational alert messages */}
					    <Button bsStyle='info'>I</Button>

					    {/* Indicates caution should be taken with this action */}
					    <Button bsStyle='warning'>W</Button>

					    {/* Indicates a dangerous or potentially negative action */}
					    <Button bsStyle='danger'>Dg</Button>

					    <OverlayTrigger trigger='click' placement='bottom' overlay={<Popover id='popID' title='Popover bottom'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
					      <Button bsStyle='default'>Popover</Button>
					    </OverlayTrigger>

					    <DropdownButton title='dropdown' id="1">
					      <MenuItem eventKey='1'><Label bsSize='medium' bsStyle='info'>IR</Label> Action</MenuItem>
					      <MenuItem eventKey='2'><Label bsSize='medium' bsStyle='warning'>RD</Label> Another action</MenuItem>
					      <MenuItem eventKey='3' active><Label bsSize='medium' bsStyle='danger'>DG</Label> Active Item</MenuItem>
					      <MenuItem divider />
					      <MenuItem eventKey='4'><Glyphicon glyph='cog' /> Separated link</MenuItem>
					    </DropdownButton>

					    <div className={ right }>
					  		<ButtonGroup>
							  	<Button><Glyphicon glyph='search' /></Button>
					        <Button><Glyphicon glyph='align-left' /></Button>
					        <Button><Glyphicon glyph='align-center' /></Button>
					        <Button><Glyphicon glyph='align-right' /></Button>
					        <Button><Glyphicon glyph='align-justify' /></Button>
					      </ButtonGroup>
					  	</div>
					  	<div className={ right }>
					  		<ButtonGroup>
							  	<Button><Glyphicon glyph='th' /></Button>
					        <Button><Glyphicon glyph='th-large' /></Button>
					        <Button><Glyphicon glyph='th-list' /></Button>
					      </ButtonGroup>
					    </div>

					  </ButtonToolbar>

		    	</div>

		    </div>
		  </Panel>    
    );
  }

};

export default Main;