/***************
UX Library Menu
****************/

import React, { Component, PropTypes } from 'react';

import styles from './LibraryMenu.scss';

import { Link } from 'react-router';

import Label from 'components/elements/label/label';

export default class LibraryMenu extends Component {

  render() {

    return (
      <div className='library__nav'>
        <div className="library__title">
          <span>
            <i className="icon-epo-logo" />
            &nbsp;
            UX Component Library&nbsp; <Label type="danger">Beta</Label>
          </span>
        </div>
        <ul className="library__menu">
          <li className="library__item">
            <span>Getting Started</span>
            <ul>
              <li><a href="#">Introduction</a></li>
              <li><a href="#">Tech stack overview</a></li>
              <li><a href="#">References</a></li>
            </ul>
          </li>
          <li className="library__item">
            <span>Elements</span>
            <ul>
              <li><a className="is-active" href="#">Buttons</a></li>
              <li><a href="#">Labels</a></li>
              <li><a href="#">Breadcrumbs</a></li>
            </ul>
          </li>
          <li className="library__item">
            <span>Composites</span>
            <ul>
              <li><a href="#">Simple menu</a></li>
              <li><a href="#">Numeric stepper</a></li>
              <li><a href="#">Search box</a></li>
            </ul>
          </li>
          <li className="library__item">
            <span>Modules</span>
          </li>
        </ul>
      </div>
    );
  }

};

LibraryMenu.propTypes = {}

LibraryMenu.defaultProps = {}


