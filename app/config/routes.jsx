/*******************************
Routes
--------------------------------
Defines the routes for our app
********************************/

import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

// Import 'scaffold' config 
import Frame from 'pages/frame';

// Import pages
import Home from 'pages/home/home';
import Page2 from 'pages/page2/page2';

// Set up variable to change base scaffolding
const baseFrame = Frame;

export default (
  <Route name="app" path="/" handler={Frame}>
    //Routes in here
    <Route name="home" path="app/home" handler={Home} />
    <Route name="screen2" path="app/screen2" handler={Page2} />
    //Fallback default route
    <DefaultRoute handler={Home} />
  </Route>
);