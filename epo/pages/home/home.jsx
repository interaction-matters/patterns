/*******************************
Home
--------------------------------
Home page
********************************/

import React, {Component} from 'react';

// Sass dependencies
import styles from './home.scss';

import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';


export default class Home extends Component {
	render() {
		return (
			<div className="home">
				{/*<Alert bsStyle='success'>
			        <strong>HOME</strong> You have successfully loaded the <strong>default home</strong> page.
			    </Alert>*/}

                <UiBasicsWrapper containerName="home__main-panel">
                </UiBasicsWrapper>
			</div>
		);
	}
}
