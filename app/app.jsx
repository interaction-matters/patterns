import React, {Component} from 'react';

import styles from './shared/styles/style.scss';

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