import React, {Component} from 'react';
import { connect } from 'react-redux';

// Sass dependencies
import styles from './Management.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import DossierSnippet from 'components/modules/DossierSnippet/DossierSnippet';
import DossierPanel from 'components/modules/DossierPanel/DossierPanel';

export default class Management extends Component {

  render() {

    return (
      <div className="management">
        <Panel panelName='management__main-panel'>
          {/* Absolute 'vanilla' implementation */}
          <DossierSnippet />
          {/* Selected state set to true, TA stamp visible, title present */}
          <DossierSnippet selected={true} taStamp={true} title="Titanium Alloy Composite for Reinforced Strategy"/>
          {/* With some stickers */}
          <DossierSnippet stickers={ [ {name:'ABEX'}, {name:'Divisional'}, {name:'SeCa'} ] } />
          {/* With number type, language set to German */}
          <DossierSnippet numberType="EP" language="DE"/>
          {/* With number type set to PCT  */}
          <DossierSnippet numberType="PCT" number="PCT 1234 5678A"/>
          {/* Finally, with some dates included  */}
          <DossierSnippet internalLimit='14.12.2015' committedLimit='10.03.2016' legalLimit='10.03.2018'/>
    		</Panel>
        <Panel panelName='management__secondary-panel'>
    			<DossierPanel />
        </Panel>
      </div>
    );
  }

};