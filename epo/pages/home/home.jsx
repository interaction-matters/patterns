/*******************************
Home
--------------------------------
Home page
********************************/

import React, {Component} from 'react';

// Sass dependencies
import styles from './home.scss';


import { Alert } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';


export default class Home extends Component {
	render() {
		return (
			<div>
				<Alert bsStyle='success'>
			        <strong>HOME</strong> You have successfully loaded the <strong>default home</strong> page.
			    </Alert>

                <Panel className="panel-main">
                </Panel>
			</div>
		);
	}
}
