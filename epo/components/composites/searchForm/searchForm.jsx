/****************************
Search Form
––––––––––––––––-------------
A search form, comprising an 
input field and submit button
*****************************/

import React, { Component } from 'react';

import styles from './searchForm.scss';

import Submit from 'components/elements/input/submit/submit';
import Text from 'components/elements/input/text/text';

export default class SearchForm extends Component {

  render() {

  	var formPlacement = this.props.formPlacement;

    return (
      <div className={"ui-search-form" + ' ' + "ui-search-form--" + formPlacement}>
				<Text {...this.props} />
				<Submit {...this.props} />
			</div>
    );
  }

};

SearchForm.defaultProps = {
  value: 'Search'
};

