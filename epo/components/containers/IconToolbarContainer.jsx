/********************************
Icon Toolbar Container
---------------------------------
A container/controller component
for fetching data to render to
the <IconToolbar /> component
*********************************/

import React, { Component } from 'react';

import { Link } from 'react-router';

import IconToolbar from 'components/composites/IconToolbar/IconToolbar';

// Import our initial state as a JSON object
const initialState = require("config/menu.json");

export default class IconToolbarContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      toolbarItems: []
    };
  }

  componentDidMount() {
    this.setState({toolbarItems: initialState.toolbarItems})
  }

  render() {

    return <IconToolbar toolbarItems={this.state.toolbarItems} />;
  }
}