/*******************************
Routes
--------------------------------
Defines the routes for our app
********************************/

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

// Import 'scaffold' options from templates
import Root from 'templates/Root';
import ManagementModule from 'templates/ManagementModule';
import Workspace from 'templates/Workspace';
import Library from 'uxlibrary/components/Library';

// Import pages
import Home from 'pages/home/home';
import Dashboard from 'pages/dashboard/dashboard';
import Content from 'pages/content/content';
import Analysis from 'pages/analysis/analysis';
import Search from 'pages/search/search';
import Viewer from 'pages/viewer/viewer';
import OfficeActions from 'pages/office_actions/office_actions';
import Management from 'pages/Management/Management';

export default (
<Route path="/" component={Root}>
  
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

  {/* Default route for root '/' path */}
  <IndexRoute to="dashboard" component={Dashboard} />

  <Route path="library" component={Library}>
    {/* <Route path="buttons" component={Buttons} /> */}
  </Route>

</Route>
);