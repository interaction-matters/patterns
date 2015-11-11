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

  	let formPlacement = "ui-search-form--" + this.props.formPlacement;

    let width;
    this.props.width ? width = "ui-search-form--" + this.props.width : width = ''

    let className = "ui-search-form" + ' ' + formPlacement + ' ' + width

    return (
      <div className={className}>
				<Text {...this.props} />
				<Submit {...this.props} />
			</div>
    );
  }

};

SearchForm.defaultProps = {
  value: 'Search'
};

