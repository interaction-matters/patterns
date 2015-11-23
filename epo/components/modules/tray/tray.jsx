/************
Sample Tray
*************/

import React, { Component } from 'react';

import TrayTitle from 'components/composites/TrayTitle/TrayTitle';
import TrayTabs from 'components/composites/TrayTabs/TrayTabs';

import styles from './Tray.scss';

export default class Tray extends Component {
  render() {

    function dummyClick(){
      console.log('clicked the menu button');
    }

    return (
      <div className="trays-module trays-module--estore">
        <TrayTitle onAddClick={dummyClick.bind(this)}>Title</TrayTitle>
        {/* {(this.props.tabs ? */}
          <TrayTabs tabOneTitle="Directorate" tabTwoTitle="Personal" /> 
        {/* )} */}

        <ol className="tray-set ui-list">

          <li>
            <a href="#" className="tray">
              <span className="tray__title">Some Current Tasks</span>
            </a>
          </li>

          <li>
            <a href="#" className="tray">
              <span className="tray__title">To Accept</span>
              <span className="tray__total">124</span>
            </a>
          </li>  
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">To Allocate</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Allocated</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
        </ol>
        
        <ol className="tray-set ui-list">
        
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Search</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Examination</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Opposition</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Appeal</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Granted</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="tray">
              <span className="tray__title">Refused</span>
              <span className="tray__total">44</span>
            </a>
          </li>
          
        </ol>
      </div> 
    );
  }

};
