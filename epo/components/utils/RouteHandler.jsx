/***********************
Route Handler
------------------------
Route handler component,
a simple div into which
we render our App routes
************************/

import React, { Component } from 'react';

export default class RouteHandler extends Component {

  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

RouteHandler.defaultProps = {
	className: 'wrapper'
}