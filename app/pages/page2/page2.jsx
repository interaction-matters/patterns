import React, {Component} from 'react';

// Sass dependencies
import styles from './page2.scss';

// React dependencies
import SampleComponent from 'components/sampleComponent/sampleComponent';

export default class Page2 extends Component {
	render() {
		return (
			<div className="view">
				<SampleComponent />
			</div>
		);
	}
}
