import React, { Component } from 'react';

import styles from './uiBasics.scss';

import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsLink from 'components/elements/uiBasicsLink/uiBasicsLink';

class UiBasics extends Component {

  render() {
    return (
    <div>
			<p>This is a paragraph with <UiBasicsLink linkTarget='#'>a regular link</UiBasicsLink> inside it. We have a simple plain <UiBasicsLabel labelType='UiBasicslabel'>label</UiBasicsLabel>, a <UiBasicsLabel labelType='UiBasicslabel warning'>warning label</UiBasicsLabel>, and here is a <UiBasicsLabel labelType='UiBasicslabel statusGranted'>TA</UiBasicsLabel> badge.</p>
		</div>	
    );
  }

};

export default UiBasics;