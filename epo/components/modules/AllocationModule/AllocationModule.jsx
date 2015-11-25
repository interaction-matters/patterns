/****************
Allocation Module
*****************/

import React, { Component, PropTypes } from 'react';

import styles from './AllocationModule.scss';

import Submit from 'components/elements/input/submit/submit';
import Button from 'components/elements/button/button';

export default class AllocationModule extends Component {

  render() {

  	let classNameName = 'allocation-module';

    return (
    	<div classNameName={classNameName}>
    		<section className="manager-module">
				  <ul className="tab-list">
				    <li className="tab-list__tab is-active" data-w-tab="Tab 1"><a href="#" className="label">Allocation</a></li>
				    <li className="tab-list__tab" data-w-tab="Tab 2"><a href="#" className="label">Accept &amp; Redistribute</a></li>
				  </ul>
				  <div className="tab-container">
				    <div className="tab-container__content" data-w-tab="Tab 1">
				      <p>1.6.51 Medical&nbsp;and Consumer Technology <a className="button--link" href="#">Check workload</a></p>
				      <form className="allocation" data-name="Allocation" id="wf-form-Allocation" name="wf-form-Allocation">
				        <div className="allocation__col">
				          <label name="allocate__1st">1st Examiner</label>
				          <select className="ui-select" data-name="allocate__1st" id="allocate__1st" name="allocate__1st">
				            <option value="null">
				              --
				            </option>
				            <option value="person_id_1">
				              Peter Jansen
				            </option>
				            <option value="person_id_2">
				              Famke Janssen
				            </option>
				            <option value="person_id_3">
				              Marietta Joritssen
				            </option>
				          </select>
				          <select className="ui-select" data-name="allocate__1st__field" id="allocate__1st__field" name="allocate__1st__field">
				            <option value="null">
				              A61F2/00 Soft Implants
				            </option>
				            <option value="person_id_1">
				              Peter Jansen
				            </option>
				            <option value="person_id_2">
				              Famke Janssen
				            </option>
				            <option value="person_id_3">
				              Marietta Joritssen
				            </option>
				          </select>
				        </div>
				        <div className="allocation__col">
				          <label name="allocate__2nd">2nd Examiner</label>
				          <select className="ui-select" data-name="allocate__2nd" id="allocate__2nd" name="allocate__2nd">
				            <option value="">
				              --
				            </option>
				            <option value="First">
				              First Choice
				            </option>
				            <option value="Second">
				              Second Choice
				            </option>
				            <option value="Third">
				              Third Choice
				            </option>
				          </select>
				          <select className="ui-select" data-name="allocate__2nd__field" id="allocate__2nd__field" name="allocate__2nd__field">
				            <option value="">
				              A61F2/00 Soft Implants
				            </option>
				            <option value="First">
				              First Choice
				            </option>
				            <option value="Second">
				              Second Choice
				            </option>
				            <option value="Third">
				              Third Choice
				            </option>
				          </select>
				        </div>
				        <div className="allocation__col">
				          <label name="allocate__chair">Chair</label>
				          <select className="ui-select" data-name="allocate__chair" id="allocate__chair" name="allocate__chair">
				            <option value="">
				              --
				            </option>
				            <option value="First">
				              First Choice
				            </option>
				            <option value="Second">
				              Second Choice
				            </option>
				            <option value="Third">
				              Third Choice
				            </option>
				          </select>
				          <select className="ui-select" data-name="allocate__chair__field" id="allocate__chair__field" name="allocate__chair__field">
				            <option value="">
				              A61F2/00 Soft Implants
				            </option>
				            <option value="First">
				              First Choice
				            </option>
				            <option value="Second">
				              Second Choice
				            </option>
				            <option value="Third">
				              Third Choice
				            </option>
				          </select>
				        </div>
				        <div className="footer-buttons">
				          <Submit value="Allocate" colour="primary" /> <Button type="link">Advanced allocation</Button>
				        </div>
				      </form>
				    </div>
				  </div>
				</section>
    	</div>
    );
  }

};

AllocationModule.propTypes = {}

AllocationModule.defaultProps = {}