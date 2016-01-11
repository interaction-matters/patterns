import React, {Component} from 'react';

// Sass dependencies
import styles from './office_actions.scss';

// React dependencies
import UiBasics from 'components/modules/uiBasics/uiBasics';
import Label from 'components/elements/label/label';
import Panel from 'components/elements/panel/panel';
import Button from 'components/elements/button/button';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    // Determine whether to show one column or two
    let frameName ;
    this.props.secondaryContent == 'active'
      ? frameName = 'office-actions--sc-' + this.props.secondaryContent
      : frameName = 'office-actions';

    // Toggle secondary state option
    let secondaryState, currentSecState, color;
    this.props.secondaryContent !== 'active'
      ? (secondaryState = "active", currentSecState = 'on', color='primary')
      : (secondaryState = "disabled", currentSecState = 'off', color='danger')

    // Function to emit when toggling 
    function alertOnClick () {
      this.props.toggleActions.toggleSecondaryContent(secondaryState)
    }

    return (
      <div className={frameName}>
        <Panel panelName='office-actions__main-panel'>
        	<Alert type='success'>
  			    <strong>Congratulations!</strong> You have successfully loaded the <strong>OFFICE ACTIONS</strong> page.
					</Alert>
          <hr />
          <h4>Secondary Content</h4>
          {/*
          ** assign dispatch to 'toggleActions' props and
          ** call the function 'toggleSecondaryContent',
          ** passing it the value of the 'secondaryState' var
          ** (see actions.js)
          */}
          <Button onAddClick={ alertOnClick.bind(this) } type={color}>Turn {currentSecState}</Button>&nbsp;
          <hr />
  			  <div>
					  {/* Put some content here */}
					</div>
        </Panel>

        {/* conditionally load secondary content */}
        {(this.props.secondaryContent == 'active' ?
          <Panel panelName='office-actions__secondary-panel'>
            {/* Secondary content here */}  
          </Panel>  
        : '' )}

      </div>
    );
  }

};