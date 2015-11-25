/***************
Dossier Preview
****************/

import React, { Component, PropTypes } from 'react';

import styles from './DossierPreview.scss';

export default class DossierPreview extends Component {

  render() {

  	let className = 'dossier-preview';

    return (
    	<div classNameName={className}>

			  <div className="tabs-container">
				  <ul className="ui-list tabs-container__list">
				    <li><button className="button tabs-container__tab is-active">Dossier Info</button></li>
				    <li><button className="button tabs-container__tab">Abstract & Figure</button></li>
				    <li><button className="button tabs-container__tab">Claims</button></li>
				    <li><button className="button tabs-container__tab">Drawings</button></li>
				    <li><button className="button tabs-container__tab" disabled>Comments</button></li>
				  </ul>
				  <div className="tabs-container__contents">		
				  	<div className="dossier-info">
				    
					    <div className="dossier-info__row with-border" >
					      
					      <div className="dossier-info__section">
					        <h3>1st Examiner</h3>
					        <p><em>Unassigned</em></p>
					      </div>
					      <div className="dossier-info__section">
					        <h3>2nd Examiner</h3>
					        <p><a href="#">E. Xaminer</a></p>
					      </div>
					      <div className="dossier-info__section">
					        <h3>Chairman</h3>
					        <p><a href="#">John Dean</a></p>
					      </div>
					      <div className="dossier-info__section">
					        <h3>Director</h3>
					        <p><a href="#">Peter Jackson</a></p>
					      </div>
					    </div>{/* dossier-info__row with-border */}

				    	<div className="dossier-info__row with-border" >

					      <div className="dossier-info__section">
					        <h3>Applicant</h3>
					        <p>
					          Technostyle SRL
					          <br /> via Erizzo, sn-LOC. Zecchei Z.I.
					          <br /> 31409 Valdobbiadene Z.I.
					          <br />
					          <br /> 00390423973617
					          <br /> Fax: 00390423925280
					          <br />
					          <a href="mailto:info@tecnostyle.it">mailto:info@tecnostyle.it</a>
					        </p>
					      </div>

					      <div className="dossier-info__section">
					        <h3>Representative</h3>
					        <p>
					          Herden, Andreas
					          <br /> Blumbach, Kramer & Partner Gbr /
					          <br /> Alexandrastr 5
					          <br /> 65187 Wiesbaden
					          <br />
					          <br /> 0611/956870
					          <br /> Fax: 0611/9568724
					          <br />
					          <a href="mailto:herden@bkp.de">herden@bkp.de</a>
					        </p>
					      </div>

					      <div className="dossier-info__section">
					        <h3>Indicators</h3>
					        <p>
					          Priority: 3
					          <br /> Target: -2
					        </p>
					      </div>
					      <div className="dossier-info__section">
					        <h3>Dates</h3>
					        <ul className="ui-list">
					          <li title="Internal time limit"><i className="icon-epo-logo"></i> <time>18.10.2013</time></li>
					          <li title="Committed time limit"><i className="icon-clock"></i> <time>18.10.2013</time></li>
					          <li title="Legal limit"><i className="icon-gavel"></i> <time>18.10.2013</time> <b>Legal</b></li>
					          <li title="Technical Acceptance limit"><i className="icon-checkmark"></i> <time>18.12.2013</time> <b className="label ta-badge" title="Technical Acceptance">TA</b></li>
					          <li title="Allocation limit"><i className="icon-people"></i> <time>18.12.2013</time> <b>Allocation</b></li>
					          <li title="Date of Receipt"><i className="icon-inbox"></i> <time>18.12.2013</time> <b>Receipt</b></li>
					          <li title="Date of Filing"><i className="icon-calendar"></i> <time>18.12.2013</time> <b>Filing</b></li>
					        </ul>
					      </div>{/* dossier-preview */}

					      <div className="dossier-info__section stickers">
					        <ul className="ui-list list-stickers">
					          <li><a href="#" className="sticker abex">ABEX</a></li>
					          <li><a href="#" className="sticker divisional">Divisional</a></li>
					          <li><a href="#" className="sticker seca">SeCa</a></li>
					        </ul>
					      </div>
					    </div>{/* dossier-info__row with-border */}

					    <div className="dossier-info__row" >
							  
							  <div className="dossier-info__section">
							    <h3>Class</h3>
							    <ul className="ui-list">
							      <li>B04B 1/00 <span className="ta-badge">TA</span></li>
							    </ul>
							  </div>
							  
							  <div className="dossier-info__section">
							    <h3>IPC</h3>
							    <ul className="ui-list">
							      <li>B04B 1/02</li>
							      <li>B04B 1/06</li>
							      <li>B04B 1/14</li>
							    </ul>
							  </div>
							  
							  <div className="dossier-info__section">
							    <h3>CPC</h3>
							    <ul className="ui-list">
							      <li>B04B 1/02</li>
							      <li>B04B 1/06</li>
							      <li>B04B 1/14</li>
							    </ul>
							  </div>

							</div>

				    	{/* 
					    <div className="dossier-info__row no-margin">
					      <div className="dossier-info__section" uiColumn>
					        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-132/Screen_Shot_2015-06-05_at_5.15.47_PM.png" alt="" />
					      </div>
					    </div>

					    <div className="dossier-info__row">
					      <div className="pdf-preview-example">
					        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-132/Screen_Shot_2015-06-05_at_5.18.48_PM.png" />
					      </div>
					    </div> */}

				  	</div>{/* dossier-info */}
					</div>{/* tabs-container__contents */}
				</div>{/* tabs-container */}
    	</div>
    );
  }

};

DossierPreview.propTypes = {}

DossierPreview.defaultProps = {}