import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

// Redux Actions
import * as ActionCreators from 'actions/actions';
import addMenuItem from 'actions/actions';

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

    let frameName;

    this.props.secondaryContent
      ? frameName = 'office-actions--sc-' + this.props.secondaryContent
      : frameName = 'office-actions';

    const { dispatch } = this.props

    return (
      <div className={frameName}>
        <Panel panelName='office-actions__main-panel'>
        	<Alert type='success'>
  			    <strong>Congratulations!</strong> You have successfully loaded the <strong>default OFFICE ACTIONS</strong> page.
					</Alert>
          <hr />
          <h4>Secondary Content</h4>
          
          <Button onAddClick={this.props.toggleSecondaryContentOn} type="primary">On</Button>&nbsp;
          <Button onAddClick={this.props.toggleSecondaryContentOff} type="danger">Off</Button>
          
         
  			  <div>  		
					  {/* Demo of all components */}
				    <UiBasics menuItems={this.props.menuItems} />
				  	{/* **** */}
					</div>     
        </Panel>

        {/* conditionally load secondary content */}
        {(this.props.secondaryContent == 'active' ? 
          <Panel panelName='office-actions__secondary-panel'>
            <p>This is a secondary content <Label type='ts-badge'>panel</Label></p>
            <hr />
            
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              <hr />         
              Here is a component (UI Basics) inside the panel:<br /><br />
              <Button>A button</Button>
              <hr />
              <p>Here is an out-of-context ui basics <Label type='ts-badge'>label</Label></p><hr />
              <p>You can see here that we are mixing an extra small <b>UI basics</b> <Button size='small' type='primary'>Button</Button> with a label for <Label type='status-refused'>Refused</Label>, and <Label type='status-pending'>Pending</Label> from UI basics (Team Edyt)</p>    
           </Panel>  : '' )}
      
      </div>
    );
  }

};

function mapStateToProps(state) {
  return { 
    menuItems: state.menuReducer,
    secondaryContent: state.secondaryContentReducer.secondaryContent
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Content);
