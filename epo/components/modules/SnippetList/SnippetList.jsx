import React, {Component} from 'react';



import DossierSnippet from 'components/modules/DossierSnippet/DossierSnippet';
import EmptySnippet from 'components/modules/DossierSnippet/EmptySnippet';



export default class SnippetList extends Component {

    render() {

        let className = 'snippet-list';

        return (
            <div className={className}>

                <EmptySnippet />



                {/* Absolute 'vanilla' implementation */}
                <DossierSnippet />

                {/* Selected state set to true, TA stamp visible, title present */}
                <DossierSnippet selected={true} taStamp={true} title="Titanium Alloy Composite for Reinforced Strategy"/>

                {/* With some stickers */}
                <DossierSnippet stickers={ [ {name:'ABEX'}, {name:'Divisional'}, {name:'SeCa'} ] } />

                {/* With number type, language set to German */}
                <DossierSnippet numberType="EP" language="DE"/>

                {/* With number type set to PCT  */}
                <DossierSnippet numberType="PCT" number="PCT 1234 5678A" applicant="Here we go"/>

                {/* Finally, with some dates included  */}
                <DossierSnippet internalLimit='14.12.2015' committedLimit='10.03.2016' legalLimit='10.03.2018'/>

            </div>
        );
    }

};

SnippetList.propTypes = {};

SnippetList.defaultProps = {};


