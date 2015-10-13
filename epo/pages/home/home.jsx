/*******************************
Home
--------------------------------
Home page
********************************/

import React, {Component} from 'react';

// Sass dependencies
import styles from './home.scss';

import Panel from 'components/elements/panel/panel';


export default class Home extends Component {
	render() {
		return (
			<div className="home">
				{/*<Alert bsStyle='success'>
			        <strong>HOME</strong> You have successfully loaded the <strong>default home</strong> page.
			    </Alert>*/}

                <Panel panelName="home__main-panel">
                </Panel>
			</div>
		);
	}
}
