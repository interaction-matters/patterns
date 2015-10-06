import React, { Component } from 'react';

import styles from './uiBasics.scss';

import UiBasicsPanel from 'components/elements/UiBasicsPanel/UiBasicsPanel';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsLink from 'components/elements/uiBasicsLink/uiBasicsLink';
import UiBasicsButton from 'components/elements/uiBasicsButton/uiBasicsButton';
import UiButtonToolbar from 'components/elements/uiButtonToolbar/uiButtonToolbar';

import MenuList from 'components/composites/menuList/menuList';
import SearchForm from 'components/composites/searchForm/searchForm';

import MenuSearchBar from 'components/modules/menuSearchBar/menuSearchBar';

class UiBasics extends Component {

	constructor(props){
    super(props);
    this.state = {
      menuItems: ['Home', 'Link1', 'Link2', 'Link3']
    };
  }

  render() {
    return (
    <div>
      {/*<h4>A menu plus search</h4>
      <UiBasicsPanel>
        <MenuSearchBar menuItems={this.state.menuItems} />
      </UiBasicsPanel> 
      <br />*/}
      <h3>Basic components</h3>
      <br />
    	<h4>Basic text with labels</h4>
  		<p>This is a paragraph with <UiBasicsLink linkTarget='#'>a regular link</UiBasicsLink> inside it. We have a simple plain&nbsp;
         <UiBasicsLabel labelType='UiBasicslabel'>label</UiBasicsLabel>, a <UiBasicsLabel labelType='UiBasicslabel warning'>warning label</UiBasicsLabel>, 
         and here is a <UiBasicsLabel labelType='UiBasicslabel statusGranted'>TA</UiBasicsLabel> badge.
         Below are some buttons:
      </p>
      <hr />
      <UiButtonToolbar>
        <h4>Buttons</h4>
         <UiBasicsButton buttonColour='primary' icon='icon-file-stack'>Icon left</UiBasicsButton>
         <UiBasicsButton buttonColour='warning' icon='icon-dossier-files' iconPlacement='right'>Icon right</UiBasicsButton>
         <UiBasicsButton buttonColour='success' icon='icon-search2' iconOnly ='true'></UiBasicsButton>
         <UiBasicsButton buttonColour='danger'>This button has a lot of text</UiBasicsButton>
         <UiBasicsButton>Default button</UiBasicsButton>
      </UiButtonToolbar>
      <br />
      <UiButtonToolbar>
        <h4>More sizes</h4>
        <UiBasicsButton buttonColour='success' buttonSize='smallest'>Smallest button</UiBasicsButton>
        <UiBasicsButton buttonColour='danger' buttonSize='small'>Small button</UiBasicsButton>
        <UiBasicsButton>Default button</UiBasicsButton>
        <UiBasicsButton buttonColour='success' icon='icon-dossier-files' buttonSize='large'>Large button</UiBasicsButton>
        <UiBasicsButton buttonColour='warning' icon='icon-file-stack' buttonSize='largest'>Largest button</UiBasicsButton>
      </UiButtonToolbar>
      <hr />
      <h4>A search Form</h4>
      <h6>Unstyled</h6>
      <SearchForm />
      <h6>With some properties added</h6>
      <SearchForm ButtonColour='warning' SubmitName='search' InputPlaceholder='Enter your search term' SubmitValue='submit your search'/>
      <hr />
      <h4>A basic menu</h4>
      <h6>The menu items can be changed using 'state'</h6>
      <MenuList menuItems={this.state.menuItems} />
    </div>
    );
  }

};

export default UiBasics;