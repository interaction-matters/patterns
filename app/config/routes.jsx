import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';

// Import default view 
import ViewMain from 'views/main/main';
// Below, we would also import any other routes we plan to use

export default (
  <Route name="app" path="/" handler={ViewMain}>
    //We will put more routes in here
  </Route>
);