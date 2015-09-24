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
	    	<div className='toolbar'>
		    	
		    		<ButtonGroup vertical>
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

					    

					  </ButtonGroup>

					  <hr />

					  <div>
				  		<ButtonGroup vertical>
						  	<Button><i className="icon-icon-annotate"></i></Button>
				        <Button><i className="icon-outdent"></i></Button>
				        <Button><i className="icon-indent"></i></Button>
				        <Button><i className="icon-template-add"></i></Button>
				        <Button><i className="icon-find-in-page"></i></Button>
				      </ButtonGroup>
				  	</div>

		    </div>
		  </Panel>    
    );
  }

};

export default Main;