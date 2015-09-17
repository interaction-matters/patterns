import React, {Component} from 'react';

// Here, we import all of our base styles
import styles from './app.scss';

import Main from './components/main/main';
import SampleComponent from './components/sampleComponent/sampleComponent';

export default class App extends Component {
	render() {
		return (
			<div>
				<Main />
				<SampleComponent />
			</div>
		);
	}
}