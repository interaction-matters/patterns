// Third party
import React, {Component} from 'react';
import { Link } from 'react-router';

// Sass dependencies
import styles from './dashboard.scss';

// React dependencies
import Panel from 'components/layout/Panel/Panel';
import Label from 'components/informational/Label/Label';

export default class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">

        <header className="dashboard__header">
          
          <h1><i className="icon-epo-logo" />&nbsp;<span className="light-red">EPO</span> UX Library</h1>
          <h6>A library of <b>React</b> components, and a visual style guide.</h6>
        </header>
        <div className="dashboard__info">
          <Label type="primary"><i className="icon-star" /> <b>v.0.0.2</b></Label>
          &nbsp;
          <Label type="success"><i className="icon-schedule" /> <b>18.12.15</b></Label>
          &nbsp;
          <Label type="default">Proposal</Label>
        </div>
        <Link to="/library">View library</Link>
      </div>
    );
  }

};