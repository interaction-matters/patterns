/************
Sample Tray
*************/

import React, { Component } from 'react';

import TrayTitle from 'components/composites/TrayTitle/TrayTitle';
import TrayTabs from 'components/composites/TrayTabs/TrayTabs';
import Tray from 'components/composites/Tray/Tray';

import styles from './TraysModule.scss';

export default class TraysModule extends Component {
  render() {

    function dummyClick(){
      console.log('clicked the ' + this.props.trayTitle + ' button');
    }
    
    let managementModule = this.props.module;

    return (
      <div className={"trays-module trays-module--" + managementModule}>
        <TrayTitle onAddClick={dummyClick.bind(this)}>{this.props.title}</TrayTitle>
        {/* {(this.props.tabs ? */}
          <TrayTabs tabOneTitle="Directorate" tabTwoTitle="Personal" /> 
        {/* )} */}

        <ol className="tray-set ui-list">

          <Tray trayTitle={"Current Tasks"} onAddClick={dummyClick.bind(this)} />

          <Tray subTray={false}
                onAddClick={dummyClick.bind(this)}
                trayTitle={"To Accept"}
                urgent={3}
                unRead={4}
                total={44}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"To Allocate"}
                total={124}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Allocated"}
                total={124}
          />

        </ol>
        
        <ol className="tray-set ui-list">

          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Search"}
                total={44}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Examination"}
                total={44}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Opposition"}
                total={44}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Appeal"}
                total={44}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Granted"}
                total={44}
          />
          <Tray onAddClick={dummyClick.bind(this)}
                trayTitle={"Refused"}
                total={44}
          />
          
        </ol>
      </div> 
    );
  }

};
