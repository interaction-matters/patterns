import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

// Import main scaffold 
import Basic from 'basic/basic';
// Import default view 
import Home from 'pages/home/home';
// All other routes
import Page2 from 'pages/page2/page2';

export default (
  <Route name="app" path="/" handler={Basic}>
    //Routes in here
    <Route name="home" path="home" handler={Home} />
    <Route name="screen2" path="screen2" handler={Page2} />
    //Fallback default route
    <DefaultRoute handler={Home} />
  </Route>
);