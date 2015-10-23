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

export default class IconToolbarContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      toolbarItems: []
    };
  }

  componentDidMount() {
    this.setState({toolbarItems: [
      {target:'analysis', icon: 'icon-analyze'}, 
      {target:'search', icon: 'icon-search2'}, 
      {target:'viewer', icon: 'icon-file-stack'}, 
      {target:'office-actions', icon: 'icon-mail2'}
    ]})
  }

  render() {

    return <IconToolbar toolbarItems={this.state.toolbarItems} />;
  }
}