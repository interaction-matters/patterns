import React, {Component} from 'react';

// Here, we import all of our base styles
import styles from './app.scss';

import ViewMain from 'views/main/main';

export default class App extends Component {
	render() {
		return (
			<ViewMain />
		);
	}
}

React.render(<App/>, document.querySelector("#myApp"));