/*******************************
Routes
--------------------------------
Defines the routes for our app
********************************/

import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

// Import 'scaffold' options from 'Frames' 
import { App, Workspace, ManagementModule } from 'pages/frames';

// Import pages
import Home from 'pages/home/home';
import Dashboard from 'pages/dashboard/dashboard';
import Content from 'pages/content/content';
import Analysis from 'pages/analysis/analysis';
import Search from 'pages/search/search';
import Viewer from 'pages/viewer/viewer';
import OfficeActions from 'pages/office_actions/office_actions';

// Set up variable to change base scaffolding
// Try changing to 'AltLayout'
// This could be a dynamic variable in future
const baseFrame = Workspace;

export default (
<Route name="app" path="/" handler={App}>
  
  {/* Workspace routes */}
  <Route name="workspace" path="/" handler={Workspace}> {/* set to route '/' to make default */}
    <Route name="home" path="workspace/home" handler={Home} />
    <Route name="dashboard" path="workspace/dashboard" handler={Dashboard} />
    <Route name="content" path="workspace/content" handler={Content} />
    <Route name="analysis" path="workspace/analysis" handler={Analysis} />
    <Route name="search" path="workspace/search" handler={Search} />
    <Route name="viewer" path="workspace/viewer" handler={Viewer} />
    <Route name="office-actions" path="workspace/office-actions" handler={OfficeActions} />
    <DefaultRoute handler={OfficeActions} />
  </Route>

  {/* Management Module routes */}
  <Route name="management" path="management" handler={ManagementModule}>
    <Route name="work-manager" path="/management/work-manager" handler={Home} />
  </Route>

  {/* Default route for root '/' path */}
  <DefaultRoute handler={Workspace} />

</Route>
);