/*************************
Sticker List
--------------------------
A component for displaying
a set of stickers in a row
**************************/

import React, { Component } from 'react';

import styles from './StickerList.scss';

export default class StickerList extends Component {

  render() {

    var stickers = this.props.stickers.map((sticker, index) => {

      return <li key={index}><a href="#" className={"sticker " + sticker.name.toLowerCase()}>{sticker.name}</a></li>
    });

    return (
      
      <ul className="ui-list list-stickers">
        {stickers}
      </ul>
    )
  }

}

StickerList.defaultProps = {}