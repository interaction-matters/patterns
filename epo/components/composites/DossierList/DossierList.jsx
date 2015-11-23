/*************************
Dossier List
--------------------------
A component for displaying
a set of dossier rows
**************************/

import React, { Component } from 'react';

import styles from './DossierList.scss';

import { Link } from 'react-router';
import DossierRow from 'components/composites/DossierRow/DossierRow'

export default class DossierList extends Component {

  render() {

    var dossierRows = this.props.dossiers.map((dossier, index) => {

      let dossierRowProps = {
        title: dossier.title,
        colour: dossier.colour,
        applicant: dossier.applicant,
        number: dossier.number,
        specialist: dossier.specialist,
        date: dossier.date
      }

      return <DossierRow key={index} {...dossierRowProps} />
    });

    return (
      
      <span className="dossier-list">
        {dossierRows}
      </span>
    )
  }

}

DossierList.defaultProps = {}