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

// Prototype pages
import Home from 'uxprototype/pages/home/home';
import Content from 'uxprototype/pages/content/content';
import Analysis from 'uxprototype/pages/analysis/analysis';
import Search from 'uxprototype/pages/search/search';
import Viewer from 'uxprototype/pages/viewer/viewer';
import OfficeActions from 'uxprototype/pages/office_actions/office_actions';
import Management from 'uxprototype/pages/Management/Management';
// Templates for prototype pages
import ManagementModule from 'uxprototype/templates/ManagementModule';
import Workspace from 'uxprototype/templates/Workspace';

export default (
<Route path="/" component={Root}>
  
  {/* Default route for root '/' path */}
  <IndexRoute to="dashboard" component={Dashboard} />
  
  {/* Workspace routes */}
  <Route path="workspace" component={Workspace}> {/* set to route '/' to make default */}
    <Route path="home" component={Home} />
    <Route path="content" component={Content} />
    <Route path="analysis" component={Analysis} />
    <Route path="search" component={Search} />
    <Route path="viewer" component={Viewer} />
    <Route path="office-actions" component={OfficeActions} />
    <IndexRoute to="office-actions" component={OfficeActions} />
  </Route>

  {/* Management Module routes */}
  <Route path="management" component={ManagementModule}>
    <Route path="work-manager" component={Management} />
    <IndexRoute to="work-manager" component={Management} />
  </Route>

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