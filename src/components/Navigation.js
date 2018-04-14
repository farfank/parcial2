import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './signout';
import AuthUserContext from './AuthUserContext';
import './App.css';
import './sb-admin.css';
import * as routes from '../pages/routes';


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul class="navbar-nav navbar-sidenav">
    <li class="nav-item"><Link to={routes.LANDING}>Hola mundo</Link></li>
    <li><Link to={routes.HOME}>Inicio</Link></li>
    <br></br>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul class="navbar-nav navbar-sidenav">
    <li class="nav-item"><Link to={routes.LANDING}>Hola mundo</Link></li>
    <li class="nav-item"><Link to={routes.SIGN_IN}>Ingresar</Link></li>
  </ul>


export default Navigation;