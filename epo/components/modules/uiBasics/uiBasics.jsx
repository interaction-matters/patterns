/*************************
UI Basics
--------------------------
Intended for display of UI 
elements on a single page,
for demonstration purposes
**************************/

import React, { Component } from 'react';

import styles from './uiBasics.scss';

import Panel from 'components/elements/panel/panel';
import Label from 'components/elements/label/label';
import TextLink from 'components/elements/link/link';
import Button from 'components/elements/button/button';

import ButtonToolBar from 'components/composites/buttonToolBar/buttonToolBar';
import MenuList from 'components/composites/menuList/menuList';
import SearchForm from 'components/composites/searchForm/searchForm';

import MenuSearchBar from 'components/modules/menuSearchBar/menuSearchBar';

class UiBasics extends Component {

	constructor(props){
    super(props);
    this.state = {
      itemsInMenu: ['Home', 'Link1', 'Link2', 'Link3']
    };
  }

  render() {
    return (
    <div>
      <h3>Basic components</h3>
      <br />
    	<h4>Basic text with labels</h4>
  		<p>This is a paragraph with <TextLink linkTarget='#'>a regular link</TextLink> inside it. We have a simple plain&nbsp;
         <Label>label</Label>, a <Label type='warning'>warning label</Label>, 
         and here is a <Label type='status-granted'>TA</Label> badge.
         Below are some buttons:
      </p>
      <hr />
      <ButtonToolBar>
        <h4>Buttons</h4>
         <Button type='primary'>Primary</Button>
         <Button type='warning'>Warning</Button>
         <Button type='success'>Success</Button>
         <Button type='danger'>Danger</Button>
         <Button type='info'>Info</Button>
         <Button>Default</Button>
         <Button type='link'>Link</Button>
      </ButtonToolBar>
      <br />
      <ButtonToolBar>
        <h6>Some alternatives</h6>
        <Button type='primary' icon='icon-file-stack'>Icon left</Button>
        <Button type='warning' icon='icon-dossier-files' position='right'>Icon right</Button>
        <Button type='success' icon='icon-search2' iconOnly ='true'></Button>
        <Button type='danger' icon='icon-warning2'>This button has a lot of text</Button>
        <Button>Default button</Button>
        <Button type='link' icon='icon-trash'>Delete this</Button>
      </ButtonToolBar>
      <br />
      <ButtonToolBar>
        <h6>More sizes</h6>
        <Button type='primary' size='smallest'>Smallest button</Button>
        <Button type='danger' size='small'>Small button</Button>
        <Button>Default button</Button>
        <Button type='success' icon='icon-dossier-files' size='large'>Large button</Button>
        <Button type='warning' icon='icon-file-stack' position="right" size='largest'>Largest button</Button>
      </ButtonToolBar>
      <br />  
      <Panel panelName='button-full-container'>
          <h4>This button will fill its container</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button type='primary' width='full'>Full width button</Button>
      </Panel>
      <hr />
      <h4>A search Form</h4>
      <h6>Unstyled</h6>
      <SearchForm />
      <h6>With some properties added</h6>
      <SearchForm colour='success' name='search' textPlaceholder='Enter your search term' value='submit your search'/>
      <hr />
      <h4>A basic menu</h4>
      <h6>The menu items can be changed using 'state'</h6>
      <MenuList menuItems={this.state.itemsInMenu} />
      <hr />
      <div>
        <h4>A menu plus search</h4>
        <MenuSearchBar menuItems={this.state.itemsInMenu} />
      </div> 
    </div>
    );
  }

};

export default UiBasics;