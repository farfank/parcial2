import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Navigation from './Navigation';
import LandingPage from './landing';
import SingUpPage from './signup';
import SingInPage from './signin';
import HomePage from './home';
import { firebase } from '../firebase';
import * as routes from '../pages/routes'

import withAuthentication from './withAuthentication';

const App = () =>
<body class="bg-dark">
  <Router>
		

    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SingUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SingInPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
    </div>
		
  </Router>
	</body>
export default withAuthentication(App);
