import React, { Component } from 'react';

import styles from './uiBasics.scss';

import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';
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
        <UiBasicsButton buttonColour='primary' buttonSize='smallest'>Smallest button</UiBasicsButton>
        <UiBasicsButton buttonColour='danger' buttonSize='small'>Small button</UiBasicsButton>
        <UiBasicsButton>Default button</UiBasicsButton>
        <UiBasicsButton buttonColour='success' icon='icon-dossier-files' buttonSize='large'>Large button</UiBasicsButton>
        <UiBasicsButton buttonColour='warning' icon='icon-file-stack' iconPlacement="right" buttonSize='largest'>Largest button</UiBasicsButton>
      </UiButtonToolbar>
      <br />  
      <UiBasicsWrapper containerName='button-full-container'>
          <h4>This button will fill its container</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <UiBasicsButton buttonColour='primary' buttonWidth='full'>Full width button</UiBasicsButton>
      </UiBasicsWrapper>
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