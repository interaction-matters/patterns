/***********************
Dossier Panel
------------------------
A Panel in Work Manager,
showing the currently 
selected dossier details
************************/

import React, { Component, PropTypes } from 'react';

import styles from './DossierPanel.scss';

import AllocationModule from 'components/modules/AllocationModule/AllocationModule';
import DossierPreview from 'components/modules/DossierPreview/DossierPreview';

export default class DossierPanel extends Component {

  render() {

    let className = 'dossier-panel';

    return (
      <div className={className}>
        <AllocationModule />
        <hr />
        <DossierPreview />
      </div>
    );
  }

};

DossierPanel.propTypes = {}

DossierPanel.defaultProps = {}