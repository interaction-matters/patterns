/****************************
Search Form
––––––––––––––––-------------
A search form, comprising an 
input field and submit button
*****************************/

import React, { Component } from 'react';

import styles from './searchForm.scss';

import InputSubmit from 'components/elements/uiBasicsInput/inputSubmit/inputSubmit';
import InputText from 'components/elements/uiBasicsInput/inputText/inputText';

export default class SearchForm extends Component {

  render() {

  	var formPlacement = this.props.formPlacement;

    return (
      <div className={"ui-search-form" + ' ' + "ui-search-form--" + formPlacement}>
				<InputText {...this.props} />
				<InputSubmit {...this.props} />
			</div>
    );
  }

};

