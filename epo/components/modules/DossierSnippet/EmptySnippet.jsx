/**********************
 Dossier Preview Snippet
 ***********************/

import React, { Component, PropTypes } from 'react';

import styles from './DossierSnippet.scss';

import StickerList from 'components/composites/StickerList/StickerList';

export default class EmptySnippet extends Component {

    render() {

        let className = 'dossier-snippet';

        let selected;
        this.props.selected == true ? selected = '--selected' : selected = ''

        let checked;
        this.props.selected == true ? checked = "true" : checked = ''

        let stickerType;
        this.props.numberType ? stickerType = "dossier-snippet__number--" + this.props.numberType : stickerType = ''

        function onAddClick() {
            console.log('snippet is ' + selected);
        }

        return (
            <div onClick={onAddClick.bind(this)} className={className + ' ' + className + selected}>
            Empty Snippet



            </div>
        );
    }

};

EmptySnippet.propTypes = {
    selected: React.PropTypes.bool,
    language: React.PropTypes.string,
    taStamp: React.PropTypes.bool,
    number: React.PropTypes.string,
    subNumber: React.PropTypes.string,
    numberType: React.PropTypes.string,
    stickers: React.PropTypes.array,
    title: React.PropTypes.string,
    applicant: React.PropTypes.string,
    status: React.PropTypes.string,
    // Time limits
    internalLimit: React.PropTypes.string,
    committedLimit: React.PropTypes.string,
    legalLimit: React.PropTypes.string
}

EmptySnippet.defaultProps = {
    selected: false,
    language: 'EN',
    taStamp: false,
    number: 'EP 1234 567 89',
    subNumber: 'A0123/45678B',
    title: 'An Amazing React Prototype',
    applicant: 'Applicant GMBH',
    status: 'Allocation of search division',
    internalLimit: '18.10.2013',
    committedLimit: '18.10.2013',
    legalLimit: '18.10.2013'
}