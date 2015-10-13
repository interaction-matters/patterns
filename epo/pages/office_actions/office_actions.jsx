import React, {Component} from 'react';

// Sass dependencies
import styles from './office_actions.scss';

// React dependencies

import UiBasics from 'components/modules/uiBasics/uiBasics';
import UiBasicsLabel from 'components/elements/uiBasicsLabel/uiBasicsLabel';
import UiBasicsWrapper from 'components/elements/uiBasicsWrapper/uiBasicsWrapper';
import UiBasicsButton from 'components/elements/uiBasicsButton/uiBasicsButton';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

  render() {

    return (
      <div className="office-actions">
        <UiBasicsWrapper containerName='office-actions__main-panel'>
        	<Alert type='success'>
  			    <strong>Congratulations!</strong> You have successfully loaded the <strong>default OFFICE ACTIONS</strong> page.
					</Alert>
  			  <div>  		
					  {/* Demo of all components */}
				    <UiBasics />
				  	{/* **** */}
					</div>      
        </UiBasicsWrapper>

        <UiBasicsWrapper containerName='office-actions__secondary-panel'>
          <p>This is a secondary content <UiBasicsLabel labelType='UiBasicslabel tsBadge'>panel</UiBasicsLabel></p>
          <hr />
          
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
          	<hr />         
            Here is a component (UI Basics) inside the panel:<br /><br />
            <UiBasicsButton>A button</UiBasicsButton>
          	<hr />
            <p>Here is an out-of-context ui basics <UiBasicsLabel labelType='UiBasicslabel tsBadge'>label</UiBasicsLabel></p><hr />
            <p>You can see here that we are mixing an extra small <b>UI basics</b> <UiBasicsButton buttonSize='small' buttonColour='primary'>Button</UiBasicsButton> with a label for <UiBasicsLabel labelType='UiBasicslabel statusRefused'>Refused</UiBasicsLabel>, and <UiBasicsLabel labelType='UiBasicslabel statusPending'>Pending</UiBasicsLabel> from UI basics (Team Edyt)</p>    
         </UiBasicsWrapper>
        
      </div>
    );
  }

};
