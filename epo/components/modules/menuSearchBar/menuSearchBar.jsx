/************************
MenuSearchBar 
-------------------------
A simple menu, comprising
a menu and search bar
*************************/

import React, { Component } from 'react';

import styles from './MenuSearchBar.scss';

import MenuList from 'components/composites/menuList/menuList';
import SearchForm from 'components/composites/searchForm/searchForm';

export default class MenuSearchBar extends Component {

  render() {

    return (
			<div className='menu-search-bar'>
		  	<MenuList {...this.props} menuPlacement='left' />
		  	<SearchForm {...this.props} formPlacement = 'right' />	  	
			</div>		
    );
  }

};

MenuSearchBar.defaultProps = {}






