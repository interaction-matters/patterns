/*******************************
Routes
--------------------------------
Defines the routes for our app
********************************/

import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

// Import 'scaffold' options from 'Frames' 
import { Frame, AltLayout } from 'pages/frames';

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
const baseFrame = Frame;

export default (
  <Route name="app" path="/" handler={baseFrame}>
    //Routes in here
    <Route name="home" path="app/home" handler={Home} />
    <Route name="dashboard" path="app/dashboard" handler={Dashboard} />
    <Route name="content" path="app/content" handler={Content} />
    <Route name="analysis" path="app/analysis" handler={Analysis} />
    <Route name="search" path="app/search" handler={Search} />
    <Route name="viewer" path="app/viewer" handler={Viewer} />
    <Route name="office-actions" path="app/office-actions" handler={OfficeActions} />
    //Fallback default route
    <DefaultRoute handler={Home} />
  </Route>
);