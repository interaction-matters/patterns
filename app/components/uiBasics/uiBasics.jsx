import React, { Component } from 'react';

import styles from './uiBasics.scss';
import { Button } from 'react-bootstrap';

class UiBasics extends Component {

  render() {
    return (
    <div>
			<p>This is a paragraph with <a href='#'>a regular link</a> inside it. We have a simple plain <span className={styles.label}>Label</span>, a <span className={styles.warning}>warning label</span>, and here is a <span className={styles.statusGranted}>TA</span> badge.</p>
		</div>	
    );
  }

};

export default UiBasics;