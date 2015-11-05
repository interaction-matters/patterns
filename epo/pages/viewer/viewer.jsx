import React, {Component} from 'react';
import { connect } from 'react-redux';

// Redux Actions
import addMenuItem from 'actions/actions';

// Sass dependencies
import styles from './viewer.scss';

// React dependencies
import Panel from 'components/elements/panel/panel';
import Alert from 'components/elements/alert/alert';
import Button from 'components/elements/button/button'

export default class Content extends Component {

  render() {

    return (
      <div className="viewer">
        <Panel panelName='viewer__main-panel'>
    			<Alert type='primary'>
    				<strong>Congratulations!</strong> You have successfully loaded the <strong>default VIEWER</strong> page.
    			</Alert>
          <hr />
          <Button onAddClick={ () => this.props.addMenuItem('1', '2') } type="danger">Off</Button>
          <hr />
    		</Panel>

        <Panel panelName='viewer__secondary-panel'>
    			<Alert type='success'>
    				<strong>Secondary Content</strong>
    			</Alert>
        </Panel>
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

export default connect(mapStateToProps, {addMenuItem})(Content);