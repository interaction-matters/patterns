/***********************
 Snippet Panel
 ------------------------
 A panel containing all elements and modules
 to show and select snippets
 ************************/

import React, { Component, PropTypes } from 'react';

import styles from './SnippetPanel.scss';

import SnippetFilter from 'components/modules/SnippetFilter/SnippetFilter';
import SnippetList from 'components/modules/SnippetList/SnippetList';

export default class SnippetPanel extends Component {

    render() {



        return (
            <div>
                <SnippetFilter />

                <SnippetList />



            </div>
        );
    }

};

SnippetPanel.propTypes = {};

SnippetPanel.defaultProps = {};