import React, {Component} from 'react';

// Sass dependencies
import styles from './analysis.scss';

// React dependencies
import UiBasics from 'components/modules/uiBasics/uiBasics';
import Label from 'components/elements/label/label';
import Panel from 'components/elements/panel/panel';
import Button from 'components/elements/button/button';
import Alert from 'components/elements/alert/alert';

export default class Content extends Component {

    render() {
        return (
            <div>
                <Panel panelName='viewer__main-panel'>
                    <Alert type='primary'>
                        <strong>Congratulations!</strong> You have successfully loaded the <strong>ANALYSIS</strong> page.
                    </Alert>
                </Panel>

                <Panel panelName='viewer__secondary-panel'>
                    <Alert type='success'>
                        <strong>Secondary Content</strong>
                    </Alert>
                </Panel>
            </div>
        );
    }
}
