import React, { Component } from 'react';

import styles from './uiBasics.scss';

import UiBasicsPanel from 'components/elements/UiBasicsPanel/UiBasicsPanel';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsLink from 'components/elements/uiBasicsLink/uiBasicsLink';
import UiBasicsButton from 'components/elements/uiBasicsButton/uiBasicsButton';
import SearchForm from 'components/composites/SearchForm/SearchForm';

class UiBasics extends Component {

  render() {
    return (
    <UiBasicsPanel>
    	<SearchForm 
				formPlacement = 'right'
				InputName='asearchForm' 
				InputPlaceholder='Some placeholder text' 
				ButtonColour='primary'
				SubmitName='searchForm1' 
				SubmitValue='Search' />	
			<p>This is a paragraph with <UiBasicsLink linkTarget='#'>a regular link</UiBasicsLink> inside it. We have a simple plain <UiBasicsLabel labelType='UiBasicslabel'>label</UiBasicsLabel>, a <UiBasicsLabel labelType='UiBasicslabel warning'>warning label</UiBasicsLabel>, and here is a <UiBasicsLabel labelType='UiBasicslabel statusGranted'>TA</UiBasicsLabel> badge.</p>
			<p>Here is a UI Basics <UiBasicsButton buttonColour='red'>Button</UiBasicsButton><UiBasicsButton buttonColour='green'>Button</UiBasicsButton></p>		
		</UiBasicsPanel>	
    );
  }

};

export default UiBasics;