/*******************************
Routes
--------------------------------
Defines the routes for our app
********************************/

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

//Root level templates and pages
import Root from 'shared/templates/Root';
import Dashboard from 'shared/pages/dashboard/dashboard';

// Library pages
import Library from 'uxlibrary/components/Library';
import ButtonsPage from 'uxlibrary/pages/buttons/ButtonsPage';
import LabelsPage from 'uxlibrary/pages/labels/LabelsPage';
import IntroductionPage from 'uxlibrary/pages/introduction/IntroductionPage';
import InputsPage from 'uxlibrary/pages/inputs/InputsPage';

export default (
<Route path="/" component={Root}>
  
  {/* Default route for root '/' path */}
  <IndexRoute to="dashboard" component={Dashboard} />

  {/* UX Library routes */}
  <Route path="library" component={Library}>
    <Route path="introduction" component={IntroductionPage} />
    <Route path="buttons" component={ButtonsPage} />
    <Route path="labels" component={LabelsPage} />
    <Route path="text-input" component={InputsPage} />
    <IndexRoute to="introduction" component={IntroductionPage} />
  </Route>

</Route>
);