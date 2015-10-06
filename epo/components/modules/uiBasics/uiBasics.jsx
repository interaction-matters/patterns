import React, { Component } from 'react';

import styles from './uiBasics.scss';

import UiBasicsPanel from 'components/elements/UiBasicsPanel/UiBasicsPanel';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsLink from 'components/elements/uiBasicsLink/uiBasicsLink';
import UiBasicsButton from 'components/elements/uiBasicsButton/uiBasicsButton';
import MenuList from 'components/composites/menuList/menuList';
import SearchForm from 'components/composites/SearchForm/SearchForm';

class UiBasics extends Component {

	constructor(props){
    super(props);
    this.state = {
      menuItems: ['Home', 'Link1', 'Link2', 'Link3']
    };
  }

  render() {
    return (
    <UiBasicsPanel>
    	<MenuList menuItems={this.state.menuItems} menuPlacement='left' />
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