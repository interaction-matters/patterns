/*************************
App List
--------------------------
A component for displaying
a set of App Rows
**************************/

import React, { Component } from 'react';

import styles from './AppList.scss';

import { Link } from 'react-router';
import AppRow from 'components/composites/AppRow/AppRow'

export default class AppList extends Component {

  render() {

    var appRows = this.props.apps.map((app, index) => {

      let appRowProps = {
        // Badge props
        name: app.name,
        type: app.colour,
        style: app.style,
        shortName: app.shortName,
        // Indicator props
        number: app.number,
        // Other
        activeNumber: app.activeNumber,
        totalNumber: app.totalNumber,
        route: app.route,
        info: this.props.info
      }

      return <AppRow key={index} {...appRowProps} />
    });

    return (
      
      <div className="app-list">
        {appRows}
      </div>
    )
  }

}

AppList.defaultProps = {}