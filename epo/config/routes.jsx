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
import Page2 from 'pages/page2/page2';

// Set up variable to change base scaffolding
// Try changing to 'AltLayout'
// This could be a dynamic variable in future
const baseFrame = Frame;

export default (
  <Route name="app" path="/" handler={baseFrame}>
    //Routes in here
    <Route name="home" path="app/home" handler={Home} />
    <Route name="screen2" path="app/screen2" handler={Page2} />
    //Fallback default route
    <DefaultRoute handler={Home} />
  </Route>
);