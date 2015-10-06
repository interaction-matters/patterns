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

            <Button className="btn-primary" href="/#/app/home">
                <i className="icon-global-nav"></i>
                <p>Workspace</p>
            </Button>

            <Button className="btn-dashboard" href="/#/app/dashboard">
              EP 1432 17589
            </Button>

            <Button className="btn-task btn-content" href="/#/app/content">
              <i className="icon-dossier-files"></i>
            </Button>

            <Button className="btn-back">
              <i className="icon-arrow_back"></i>
            </Button>

            <Button  className="btn-task" href="/#/app/analysis">
              <i className="icon-analyze"></i>
            </Button>

            <Button  className="btn-task" href="/#/app/search">
              <i className="icon-search2"></i>
            </Button>

            <Button className="btn-task" href="/#/app/viewer">
              <i className="icon-file-stack"></i>
            </Button>

            <Button className="btn-task" href="/#/app/office-actions">
              <i className="icon-mail2"></i>
            </Button>

          </ButtonGroup>

      </div>
    );
  }

};

Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
};
