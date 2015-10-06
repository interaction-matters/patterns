import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './navigation.scss';

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

export default class Navigation extends Component {

  render() {

    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );

    return (
    	<div className='vertical-navigation__toolbar'>
          
          <ButtonGroup vertical>
            {/* Standard button */}
            <Button bsStyle='primary'>
              <Link to="home">
                <i className="icon-global-nav"></i>
                <p>Workspace</p>
              </Link>
            </Button>

            {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
            <OverlayTrigger placement='right' overlay={tooltip}>              
              <Button>
                <Link to="screen2">
                  <i className="icon-dossier-files"></i>
                </Link>
              </Button>             
            </OverlayTrigger>

            {/* Indicates a successful or positive action */}
            <Button>
              <i className="icon-analyze"></i>
            </Button>

            {/* Contextual button for informational alert messages */}
            <Button>
              <i className="icon-search2"></i>
            </Button>

            {/* Indicates caution should be taken with this action */}
            <Button>
              <i className="icon-file-stack"></i>
            </Button>

            {/* Indicates a dangerous or potentially negative action */}
            <Button>
              <i className="icon-mail2"></i>
            </Button>

          </ButtonGroup>

      </div>
    );
  }

};

// Scope the 'this' function to the router context
Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};
