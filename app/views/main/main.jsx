import React, {Component} from 'react';

// Sass dependencies
import styles from './main.scss';

// React dependencies
import SampleComponent from 'components/sampleComponent/sampleComponent';

import Navigation from 'modules/navigation/navigation';
import Helpers from 'modules/helpers/helpers';

export default class ViewMain extends Component {
	render() {
		return (
			<div className="view">
				{/* Main navigation */}
				<div className="vertical-navigation">
					<Navigation />
				</div>
				{/* Routes */}
				<div className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					{/* But for now... */}
					<SampleComponent />
				</div>
				{/* Helpers */}
				<div className="helpers">
					<Helpers />
				</div>
			</div>
		);
	}
}
