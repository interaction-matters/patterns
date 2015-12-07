import React, {Component} from 'react';
import { connect } from 'react-redux';

// Sass dependencies
import styles from './Management.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import SnippetPanel from 'components/modules/SnippetPanel/SnippetPanel';
import DossierPanel from 'components/modules/DossierPanel/DossierPanel';

export default class Management extends Component {

  render() {

    return (
      <div className="management">

        <Panel panelName='management__main-panel'>
            <SnippetPanel />
        </Panel>


        <Panel panelName='management__secondary-panel'>
          <DossierPanel />
        </Panel>
      </div>
    );
  }

};